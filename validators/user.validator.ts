import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email("Invalid email").max(100),
  password: z
    .string()
    .min(6, "Password must be more than 6 characters")
    .max(32),
  role: z.enum(["ADMIN", "MEMBER"]).default("MEMBER"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
});
export type UserType = z.infer<typeof UserSchema>;

export const UserUpdateSchema = UserSchema.pick({
  email: true,
  password: true,
  role: true,
}).partial();
export type UserUpdateType = z.infer<typeof UserUpdateSchema>;

export function validateUser(data: unknown) {
  const parsed = UserUpdateSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
