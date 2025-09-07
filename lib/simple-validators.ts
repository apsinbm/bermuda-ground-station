import { z } from 'zod';

export const simpleContactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  phone: z
    .string()
    .optional(),
  message: z
    .string()
    .min(10, 'Please provide at least 10 characters describing your requirements')
    .max(1000, 'Message must be less than 1000 characters'),
});

export type SimpleContactFormData = z.infer<typeof simpleContactFormSchema>;