import { z } from "zod";
import { ProfileSchema, ResponseProfileSchema } from "./profile.validator";
import { BookingSchema, ResponseBookingSchema } from "./booking.validator";

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email("Invalid email").max(40),
  password: z
    .string()
    .min(6, "Password must be more than 6 characters")
    .max(32)
    .trim(),
  role: z.enum(["ADMIN", "MEMBER"]).default("MEMBER"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateUserSchema = CreateUserSchema.partial();
export const ResponseUserSchema = UserSchema.pick({
  email: true,
  role: true,
}).extend({
  profile: ResponseProfileSchema,
  bookings: z.array(ResponseBookingSchema),
});

//
// Type
//
export type CreateUserType = z.infer<typeof CreateUserSchema>;
export type UpdateUserType = z.infer<typeof UpdateUserSchema>;
export type ResponseUserType = z.infer<typeof ResponseUserSchema>;

//
// Validate
//
export function validateCreateUser(data: unknown) {
  const parsed = CreateUserSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
export function validateUpdateUser(data: unknown) {
  const parsed = UpdateUserSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
