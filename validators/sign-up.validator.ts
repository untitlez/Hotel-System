import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.string().email("Invalid email address."),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters.")
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });
export type SignUpType = z.infer<typeof SignUpSchema>;

export function validateSignUp(data: unknown) {
  const parsed = SignUpSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
