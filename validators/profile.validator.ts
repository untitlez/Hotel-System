import { z } from "zod";

export const ProfileSchema = z.object({
  userId: z.string().cuid(),
  fullName: z.string().trim(),
  gender: z.string().trim(),
  birthday: z.coerce.date(),
  address: z.string().trim().max(100, {
    message: "ที่อยู่ต้องไม่เกิน 100 ตัวอักษร",
  }),
  phone: z
    .string()
    .regex(/^0[0-9]{9}$/, "เบอร์โทรไม่ถูกต้อง")
    .trim(),
  status: z.enum(["ACTIVE", "DISABLED"]).default("ACTIVE"),
  updatedAt: z.coerce.date(),
});

export const UpdateProfileSchema = ProfileSchema.partial();
export const ResponseProfileSchema = ProfileSchema.extend({
  birthday: z.string(),
  updatedAt: z.string(),
});

//
// Type
//
export type UpdateProfileType = z.infer<typeof UpdateProfileSchema>;
export type ResponseProfileType = z.infer<typeof ResponseProfileSchema>;

//
// Validate
//
export function validateUpdateProfile(data: unknown) {
  const parsed = UpdateProfileSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
