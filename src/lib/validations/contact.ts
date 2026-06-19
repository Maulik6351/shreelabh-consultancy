import * as z from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must not exceed 100 characters")
    .trim(),
  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .or(z.literal("")), // optional but validates if filled
  service: z.string().min(1, "Please select a service"),
  message: z.string().max(1000, "Message must not exceed 1000 characters").optional(),
  honeypot: z.string().max(0, { message: "Spam detected" }).optional(), // Honeypot field
});

export type ContactFormValues = z.infer<typeof contactSchema>;
