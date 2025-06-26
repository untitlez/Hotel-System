import { z } from "zod";

export const RoomSchema = z.object({
  id: z.string().cuid(),
  roomNumber: z.string().min(1, "โปรดเพิ่มหมายเลขห้อง"),
  location: z.string().min(1, "โปรดเพิ่มสถานที่"),
  type: z.coerce.string().optional(),
  description: z.string().optional(),
  pricePerNight: z.coerce.number().positive("ราคาต่อคืนต้องเป็นบวก"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
});
export type RoomType = z.infer<typeof RoomSchema>;

export const RoomFormSchema = RoomSchema.pick({
  roomNumber: true,
  location: true,
  type: true,
  description: true,
  pricePerNight: true,
});
export type RoomFormType = z.infer<typeof RoomFormSchema>;
