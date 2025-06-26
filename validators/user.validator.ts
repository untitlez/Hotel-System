import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email("อีเมลไม่ถูกต้อง"),
  password: z.string(),
  role: z.enum(["ADMIN", "MEMBER"]).default("MEMBER"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
});
export type UserType = z.infer<typeof UserSchema>;
