'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema, ContactFormData } from '@/lib/validators';
import { CheckCircle, AlertCircle, Loader2, Shield, ChevronDown } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [hCaptchaToken, setHCaptchaToken] = useState<string | null>(null);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: Omit<ContactFormData, 'hCaptchaToken'>) => {
    // Honeypot check - if filled, it's a bot
    const honeypotField = (data as any).website;
    if (honeypotField && honeypotField.trim() !== '') {
      // Silently reject bot submission
      return;
    }

    if (!hCaptchaToken) {
      setErrorMessage('Please complete the captcha');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          hCaptchaToken,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setHCaptchaToken(null);
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <Card className={className}>
        <CardContent className="p-8 text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Thank you for your inquiry!</h3>
          <p className="text-muted-foreground mb-4">
            We&apos;ve received your message and will respond within 24 hours with a detailed proposal.
          </p>
          <Button onClick={() => setSubmitStatus('idle')}>
            Submit Another Inquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Inquiry Form</CardTitle>
        <CardDescription>
          Provide your requirements and we will respond with a technical proposal within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-muted">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Your Information is Secure</p>
              <p className="text-sm text-muted-foreground">
                All data is encrypted and transmitted securely. We never share your information with third parties.
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                First Name *
              </label>
              <Input
                id="firstName"
                {...register('firstName')}
                className={errors.firstName ? 'border-red-500' : ''}
                aria-invalid={errors.firstName ? 'true' : 'false'}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              />
              {errors.firstName && (
                <p id="firstName-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                Last Name *
              </label>
              <Input
                id="lastName"
                {...register('lastName')}
                className={errors.lastName ? 'border-red-500' : ''}
                aria-invalid={errors.lastName ? 'true' : 'false'}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              />
              {errors.lastName && (
                <p id="lastName-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company *
              </label>
              <Input
                id="company"
                {...register('company')}
                className={errors.company ? 'border-red-500' : ''}
                aria-invalid={errors.company ? 'true' : 'false'}
                aria-describedby={errors.company ? 'company-error' : undefined}
              />
              {errors.company && (
                <p id="company-error" role="alert" className="mt-1 text-sm text-red-600">{errors.company.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                type="tel"
                {...register('phoneNumber')}
                placeholder="+1-441-705-1547"
                className={errors.phoneNumber ? 'border-red-500' : ''}
                aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
              />
              {errors.phoneNumber && (
                <p id="phoneNumber-error" role="alert" className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="useCase" className="block text-sm font-medium mb-2">
              Primary Use Case *
            </label>
            <select
              id="useCase"
              {...register('useCase')}
              className={`w-full rounded-md border px-3 py-2 text-sm ${
                errors.useCase ? 'border-red-500' : 'border-input'
              }`}
              aria-invalid={errors.useCase ? 'true' : 'false'}
              aria-describedby={errors.useCase ? 'useCase-error' : undefined}
            >
              <option value="">Select your use case</option>
              <option value="leo-constellation">LEO Constellation Ground Station</option>
              <option value="geo-satellite">GEO Satellite Communications</option>
              <option value="maritime-comms">Maritime Communications</option>
              <option value="research">Research & Development</option>
              <option value="emergency-comms">Emergency Communications</option>
              <option value="other">Other</option>
            </select>
            {errors.useCase && (
              <p id="useCase-error" role="alert" className="mt-1 text-sm text-red-600">{errors.useCase.message}</p>
            )}
          </div>

          {/* Technical Details Toggle */}
          <div className="border-t pt-6">
            <button
              type="button"
              onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
              className="flex items-center justify-between w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Technical Details (Optional)</span>
              <ChevronDown 
                className={`h-4 w-4 transition-transform ${showTechnicalDetails ? 'rotate-180' : ''}`} 
              />
            </button>
            <p className="text-xs text-muted-foreground mt-1">
              Provide specific technical requirements for more accurate assistance
            </p>
          </div>

          {showTechnicalDetails && (
            <div className="space-y-6 border border-muted rounded-lg p-4 bg-muted/20">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Frequency Bands (Select all that apply)
                </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                { value: 'uhf', label: 'UHF' },
                { value: 'l-band', label: 'L-Band' },
                { value: 'c-band', label: 'C-Band' },
                { value: 'x-band', label: 'X-Band' },
                { value: 'ku-band', label: 'Ku-Band' },
                { value: 'ka-band', label: 'Ka-Band' },
                { value: 'other', label: 'Other' },
              ].map((freq) => (
                <label key={freq.value} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={freq.value}
                    {...register('frequencies')}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm">{freq.label}</span>
                </label>
              ))}
            </div>
            {errors.frequencies && (
              <p className="mt-1 text-sm text-red-600">{errors.frequencies.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="dishSize" className="block text-sm font-medium mb-2">
                Antenna Size
              </label>
              <select
                id="dishSize"
                {...register('dishSize')}
                className={`w-full rounded-md border px-3 py-2 text-sm ${
                  errors.dishSize ? 'border-red-500' : 'border-input'
                }`}
              >
                <option value="">Select size</option>
                <option value="small-1m">Small (&lt; 1m)</option>
                <option value="medium-2-5m">Medium (1-5m)</option>
                <option value="large-5-10m">Large (5-10m)</option>
                <option value="xl-10m-plus">XL (10m+)</option>
              </select>
              {errors.dishSize && (
                <p className="mt-1 text-sm text-red-600">{errors.dishSize.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="transmitReceive" className="block text-sm font-medium mb-2">
                Operation *
              </label>
              <select
                id="transmitReceive"
                {...register('transmitReceive')}
                className={`w-full rounded-md border px-3 py-2 text-sm ${
                  errors.transmitReceive ? 'border-red-500' : 'border-input'
                }`}
              >
                <option value="">Select operation</option>
                <option value="receive-only">Receive Only</option>
                <option value="transmit-only">Transmit Only</option>
                <option value="both">Both Tx/Rx</option>
              </select>
              {errors.transmitReceive && (
                <p className="mt-1 text-sm text-red-600">{errors.transmitReceive.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="powerRequirement" className="block text-sm font-medium mb-2">
                Power Required
              </label>
              <select
                id="powerRequirement"
                {...register('powerRequirement')}
                className={`w-full rounded-md border px-3 py-2 text-sm ${
                  errors.powerRequirement ? 'border-red-500' : 'border-input'
                }`}
              >
                <option value="">Select power</option>
                <option value="low-1kw">Low (&lt; 1kW)</option>
                <option value="medium-1-5kw">Medium (1-5kW)</option>
                <option value="high-5-10kw">High (5-10kW)</option>
                <option value="xl-10kw-plus">XL (10kW+)</option>
              </select>
              {errors.powerRequirement && (
                <p className="mt-1 text-sm text-red-600">{errors.powerRequirement.message}</p>
              )}
            </div>
          </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">
              Location Preference * (Select all that apply)
            </label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {[
                { value: 'rooftop', label: 'Rooftop Installation' },
                { value: 'satellite-farm', label: 'Satellite Farm' },
                { value: 'datacenter', label: 'Datacenter' },
              ].map((location) => (
                <label key={location.value} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={location.value}
                    {...register('locationPreference')}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm">{location.label}</span>
                </label>
              ))}
            </div>
            {errors.locationPreference && (
              <p className="mt-1 text-sm text-red-600">{errors.locationPreference.message}</p>
            )}
          </div>


          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Additional Requirements *
            </label>
            <Textarea
              id="message"
              {...register('message')}
              rows={4}
              placeholder="Please describe your specific technical requirements, operational constraints, or any other details that would help us prepare an accurate proposal..."
              className={errors.message ? 'border-red-500' : ''}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          {/* Honeypot field - hidden from users, visible to bots */}
          <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', visibility: 'hidden' }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && (
            <div>
              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                onVerify={setHCaptchaToken}
                onExpire={() => setHCaptchaToken(null)}
              />
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{errorMessage}</span>
            </div>
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}