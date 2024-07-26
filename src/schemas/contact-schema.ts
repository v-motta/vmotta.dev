import { z } from 'zod'

export const contactFormValidationSchema = z.object({
  name: z
    .string()
    .min(1, 'Write your name.')
    .max(100, 'Name should not exceed 100 characters.'),
  email: z
    .string()
    .min(1, 'Write your email.')
    .max(255, 'E-mail should not exceed 255 characters.')
    .email('Please enter a valid email address.'),
  message: z
    .string()
    .min(10, 'Message should be more than 10 characters')
    .max(500, 'Message should not exceed 500 characters.'),
})

export type ContactFormValues = z.infer<typeof contactFormValidationSchema>
