import { z } from "zod";

export const ProfileSchema = z.object({
  userId: z.string().cuid().trim(),
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
export type ProfileType = z.infer<typeof ProfileSchema>;

export const ProfileFormSchema = ProfileSchema.pick({
  fullName: true,
  gender: true,
  birthday: true,
  address: true,
  phone: true,
}).partial();
export type ProfileFormType = z.infer<typeof ProfileFormSchema>;

export function validateProfile(data: unknown) {
  const parsed = ProfileFormSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
