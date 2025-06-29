import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.string().email("อีเมลไม่ถูกต้อง"),
    password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "รหัสผ่านไม่ตรงกัน",
    path: ["confirmPassword"],
  });
export type SignUpType = z.infer<typeof SignUpSchema>;

export function validateSignUp(data: unknown) {
  const parsed = SignUpSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
