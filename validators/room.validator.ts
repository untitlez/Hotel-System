import { z } from "zod";

export const RoomSchema = z.object({
  id: z.string().cuid(),
  name: z.string().min(1, "โปรดระบุชื่อห้อง").trim(),
  location: z.string().min(1, "โปรดเพิ่มสถานที่").trim(),
  type: z.coerce.string().min(1, "โปรดเลือกประเภทห้อง").trim(),
  pricePerNight: z.coerce.number().positive("ราคาต่อคืนต้องเป็นบวก"),
  maxGuests: z.coerce
    .number()
    .positive("จำนวนผู้เข้าพักต้องเป็นบวก")
    .optional(),
  roomSize: z.coerce.number().positive("ขนาดห้องต้องเป็นบวก").optional(),
  beds: z.string().trim().optional(),
  amenities: z.array(z.string()).default([]),
  image: z.string().trim().optional(),
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
