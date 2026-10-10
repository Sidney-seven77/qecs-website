import { z } from "zod";
export const TOPICS = ["General enquiry", "Admissions", "Visit the school", "Other"] as const;
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  topic: z.enum(TOPICS),
  body: z.string().trim().min(10, "Write at least 10 characters.").max(3000, "Keep the message under 3000 characters."),
  website: z.string().max(0).optional(), // honeypot: must stay empty
});
export type ContactInput = z.infer<typeof contactSchema>;
