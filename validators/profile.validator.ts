import { z } from "zod";

export const ProfileSchema = z.object({
  userId: z.string().cuid(),
  fullName: z.string().optional(),
  gender: z.string().optional(),
  birthday: z.date().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  status: z.enum(["ACTIVE", "DISABLED"]).default("ACTIVE"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type ProfileType = z.infer<typeof ProfileSchema>;

export function validateProfile(data: unknown) {
  const parsed = ProfileSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
