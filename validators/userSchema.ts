import { z } from "zod";

export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string().nullable().optional(),
  email: z.string().email(),
  passwordHash: z.string(),
  role: z.enum(["ADMIN", "MEMBER"]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().nullable().optional(),
});

export type userType = z.infer<typeof userSchema>;
