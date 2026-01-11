import { UserRole } from "@prisma/client";
import { z } from "zod";

export const SessionSchema = z.object({
  user: z.object({
    id: z.string().optional(),
    name: z.string().nullable().optional(),
    email: z.string().email().nullable().optional(),
    image: z.string().url().nullable().optional(),
    role: z.nativeEnum(UserRole).optional(),
  }),
  expires: z.string(),
});

export type SessionType = z.infer<typeof SessionSchema>;
