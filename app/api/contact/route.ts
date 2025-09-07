import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validators';
import { rateLimit } from '@/lib/rate-limit';

// Verify hCaptcha token
async function verifyHCaptcha(token: string): Promise<boolean> {
  if (!process.env.HCAPTCHA_SECRET_KEY) {
    console.warn('hCaptcha verification skipped - no secret key configured');
    return true; // Allow in development
  }

  try {
    const response = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('hCaptcha verification error:', error);
    return false;
  }
}

// Send email notification (if configured)
async function sendEmailNotification(data: any): Promise<boolean> {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFICATION_EMAIL) {
    console.log('Email notification skipped - not configured');
    return true;
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const htmlContent = `
      <h2>New Ground Station Inquiry - Atlantic Ground Station</h2>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber || 'Not provided'}</p>
      
      <h3>Technical Requirements</h3>
      <p><strong>Use Case:</strong> ${data.useCase}</p>
      <p><strong>Frequency Bands:</strong> ${data.frequencies.join(', ')}</p>
      <p><strong>Antenna Size:</strong> ${data.dishSize}</p>
      <p><strong>Operation:</strong> ${data.transmitReceive}</p>
      <p><strong>Power Required:</strong> ${data.powerRequirement}</p>
      <p><strong>Location Preference:</strong> ${data.locationPreference.join(', ')}</p>
      <p><strong>Timeline:</strong> ${data.timeline}</p>
      <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
      
      <h3>Additional Requirements</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
        ${data.message.replace(/\n/g, '<br>')}
      </div>
      
      <hr>
      <p style="color: #666; font-size: 12px;">
        Sent from Atlantic Ground Station contact form<br>
        Time: ${new Date().toLocaleString()}
      </p>
    `;

    await resend.emails.send({
      from: 'Atlantic Ground Station <noreply@atlanticground.com>',
      to: [process.env.NOTIFICATION_EMAIL],
      subject: `New Ground Station Inquiry from ${data.company}`,
      html: htmlContent,
      reply_to: data.email,
    });

    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const rateLimitResult = rateLimit(request, 5, 15 * 60 * 1000); // 5 requests per 15 minutes
  
  if (!rateLimitResult.success) {
    return NextResponse.json(
      { 
        message: 'Too many requests. Please try again later.',
        resetTime: rateLimitResult.reset 
      },
      { 
        status: 429,
        headers: {
          'X-RateLimit-Reset': rateLimitResult.reset.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        }
      }
    );
  }

  try {
    const body = await request.json();
    
    // Validate the form data
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          message: 'Invalid form data',
          errors: validationResult.error.issues 
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Verify hCaptcha
    const isHCaptchaValid = await verifyHCaptcha(data.hCaptchaToken);
    if (!isHCaptchaValid) {
      return NextResponse.json(
        { message: 'Captcha verification failed' },
        { status: 400 }
      );
    }

    // Basic spam detection
    const spamKeywords = ['seo', 'marketing', 'viagra', 'casino', 'loan'];
    const messageContent = `${data.message} ${data.company}`.toLowerCase();
    const hasSpamKeywords = spamKeywords.some(keyword => 
      messageContent.includes(keyword)
    );

    if (hasSpamKeywords) {
      return NextResponse.json(
        { message: 'Message flagged as potential spam' },
        { status: 400 }
      );
    }

    // Honeypot check (if implementing client-side honeypot)
    if ((body as any).honeypot) {
      return NextResponse.json(
        { message: 'Bot detected' },
        { status: 400 }
      );
    }

    // Send email notification
    const emailSent = await sendEmailNotification(data);
    
    if (!emailSent) {
      console.error('Failed to send email notification');
      // Don't fail the request, just log the error
    }

    // Log the submission (in production, you might want to store this in a database)
    console.log('New contact form submission:', {
      timestamp: new Date().toISOString(),
      company: data.company,
      email: data.email,
      useCase: data.useCase,
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Reset': rateLimitResult.reset.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        }
      }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}