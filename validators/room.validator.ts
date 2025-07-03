import { z } from "zod";

export const RoomSchema = z.object({
  id: z.string().cuid(),
  roomNumber: z.string().min(1, "โปรดเพิ่มหมายเลขห้อง").trim(),
  location: z.string().min(1, "โปรดเพิ่มสถานที่").trim(),
  type: z.coerce.string(),
  description: z.string().trim(),
  pricePerNight: z.coerce.number().positive("ราคาต่อคืนต้องเป็นบวก"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateRoomSchema = RoomSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateRoomSchema = CreateRoomSchema.partial();
export const ResponseRoomSchema = RoomSchema.extend({
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
