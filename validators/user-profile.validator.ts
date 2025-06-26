import { z } from "zod";

export const UserProfileSchema = z.object({
  id: z.string().cuid(),
  fullName: z.string().optional(),
  gender: z.string().optional(),
  birthday: z.date().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  status: z.enum(["ACTIVE", "DISABLED"]).default("ACTIVE"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
});
export type UserProfileType = z.infer<typeof UserProfileSchema>;

export const ListUserProfileSchema = UserProfileSchema.pick({
  fullName: true,
  gender: true,
  birthday: true,
  address: true,
  phone: true,
  status: true,
});
export type ListUserProfileType = z.infer<typeof ListUserProfileSchema>;
