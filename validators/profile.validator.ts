import { z } from "zod";

export const ProfileSchema = z.object({
  userId: z.string().cuid(),
  image: z.union([z.string().url(), z.instanceof(File)]),
  fullName: z.string().trim(),
  gender: z.string().trim(),
  birthday: z.coerce.date(),
  address: z
    .string()
    .trim()
    .max(100, { message: "Address must not exceed 100 characters." }),
  phone: z
    .string()
    .regex(/^0[0-9]{9}$/, {
      message: "Phone number must start with 0 and contain 10 digits.",
    })
    .trim(),
  status: z.enum(["ACTIVE", "DISABLED"]).default("ACTIVE"),
  updatedAt: z.coerce.date(),
});

export const UpdateProfileSchema = ProfileSchema.partial().extend({
  image: z.string().url(),
});
export const ResponseProfileSchema = ProfileSchema.extend({
  image: z.string().url(),
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
