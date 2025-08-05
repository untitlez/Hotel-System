import { z } from "zod";

export const RoomSchema = z.object({
  id: z.string().cuid(),
  name: z.string().min(1, "Room name is required.").trim(),
  location: z.string().min(1, "Location is required.").trim(),
  type: z.coerce.string().min(1, "Room type is required.").trim(),
  pricePerNight: z.coerce
    .number()
    .min(1, "Price is required.")
    .positive("Price per night must be a positive number."),
  maxGuests: z.coerce
    .number()
    .positive("Max guests must be a positive number.")
    .optional(),
  roomSize: z.coerce
    .number()
    .positive("Room size must be a positive number.")
    .optional(),
  beds: z.string().trim().optional(),
  amenities: z.array(z.string()).default([]),
  image: z.union([z.string().url(), z.instanceof(File)]),
  availableDates: z.array(z.coerce.date()).default([]),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateRoomSchema = RoomSchema.omit({
  id: true,
  availableDates: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateRoomSchema = CreateRoomSchema.partial();
export const ResponseRoomSchema = RoomSchema.extend({
  image: z.string().url(),
  availableDates: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

//
// Type
//
export type CreateRoomType = z.infer<typeof CreateRoomSchema>;
export type UpdateRoomType = z.infer<typeof UpdateRoomSchema>;
export type ResponseRoomType = z.infer<typeof ResponseRoomSchema>;

//
// Validate
//
export function validateCreateRoom(data: unknown) {
  const parsed = CreateRoomSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}

export function validateUpdateRoom(data: unknown) {
  const parsed = UpdateRoomSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
