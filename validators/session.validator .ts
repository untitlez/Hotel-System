import { z } from "zod";

export const SessionSchema = z.object({
  user: z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    email: z.string().email().optional(),
    image: z.string().url().nullable().optional(),
    role: z.enum(["ADMIN", "MEMBER"]).optional(),
  }),
  expires: z.string(),
});

export type SessionType = z.infer<typeof SessionSchema>;
