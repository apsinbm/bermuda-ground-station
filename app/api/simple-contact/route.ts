import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { simpleContactFormSchema } from '@/lib/simple-validators';

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validationResult = simpleContactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Invalid form data',
          errors: validationResult.error.issues 
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validationResult.data;

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission - Atlantic Ground Station</h2>
      
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      
      <h3>Message:</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      
      <hr>
      <p style="color: #666; font-size: 12px;">
        Sent from Atlantic Ground Station contact form<br>
        Time: ${new Date().toLocaleString()}<br>
        User IP: ${request.headers.get('x-forwarded-for') || 'Unknown'}
      </p>
    `;

    // Try to send email if configured
    if (resend && process.env.NOTIFICATION_EMAIL) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Atlantic Ground Station <noreply@atlanticground.com>',
          to: [process.env.NOTIFICATION_EMAIL],
          subject: `New Contact from ${name} - Atlantic Ground Station`,
          html: emailContent,
          replyTo: email,
        });

        if (error) {
          console.error('Resend error:', error);
        } else {
          console.log('Email sent successfully:', data?.id);
        }
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    } else {
      console.log('Email not configured - logging contact form submission');
    }

    // Log the submission
    console.log('Simple contact form submission:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      message: message.substring(0, 100) + '...',
    });

    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Simple contact form error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Internal server error. Please try again.' 
      },
      { status: 500 }
    );
  }
}