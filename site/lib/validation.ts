import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "tooShort").max(80, "tooLong"),
  email: z.string().email("invalidEmail"),
  subject: z.string().min(3, "tooShort").max(120, "tooLong"),
  message: z.string().min(10, "tooShort").max(4000, "tooLong"),
});

export type ContactInput = z.infer<typeof contactSchema>;
