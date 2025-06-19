import { z } from "zod";

export const bookingSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  roomId: z.string(),
  checkInDate: z.date(),
  checkOutDate: z.date(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().nullable().optional(),
});

export type bookingType = z.infer<typeof bookingSchema>;
