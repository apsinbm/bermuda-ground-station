import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  company: z
    .string()
    .min(1, 'Company is required')
    .max(100, 'Company name must be less than 100 characters'),
  phoneNumber: z
    .string()
    .optional()
    .refine((val) => !val || /^\+?[\d\s\-\(\)]{10,}$/.test(val), {
      message: 'Invalid phone number format',
    }),
  useCase: z
    .enum(['leo-constellation', 'geo-satellite', 'maritime-comms', 'research', 'emergency-comms', 'other'])
    .refine((val) => val !== undefined, {
      message: 'Please select a use case',
    }),
  frequencies: z
    .array(z.enum(['uhf', 'l-band', 'c-band', 'x-band', 'ku-band', 'ka-band', 'other']))
    .min(1, 'Please select at least one frequency band'),
  dishSize: z
    .enum(['small-1m', 'medium-2-5m', 'large-5-10m', 'xl-10m-plus'])
    .refine((val) => val !== undefined, {
      message: 'Please select a dish size',
    }),
  transmitReceive: z
    .enum(['receive-only', 'transmit-only', 'both'])
    .refine((val) => val !== undefined, {
      message: 'Please specify transmit/receive requirements',
    }),
  powerRequirement: z
    .enum(['low-1kw', 'medium-1-5kw', 'high-5-10kw', 'xl-10kw-plus'])
    .refine((val) => val !== undefined, {
      message: 'Please select power requirements',
    }),
  locationPreference: z
    .array(z.enum(['rooftop', 'satellite-farm', 'datacenter']))
    .min(1, 'Please select at least one location type'),
  message: z
    .string()
    .min(10, 'Please provide at least 10 characters describing your requirements')
    .max(1000, 'Message must be less than 1000 characters'),
  hCaptchaToken: z.string().min(1, 'Please complete the captcha').optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;