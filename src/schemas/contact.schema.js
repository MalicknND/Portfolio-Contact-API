import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(80),
  email: z.string().email("Email invalide").max(120),
  subject: z
    .string()
    .min(2, "Le sujet doit contenir au moins 2 caractères")
    .max(120),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000),
  website: z.string().optional().default(""), // honeypot anti-spam
});
