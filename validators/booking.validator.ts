import { z } from "zod";

export const BookingSchema = z.object({
  id: z.string().cuid(),
  userId: z.string().cuid(),
  roomId: z.string().cuid(),
  checkInDate: z.coerce.date(),
  checkOutDate: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
});
export type BookingType = z.infer<typeof BookingSchema>;

export function validateBooking(data: unknown) {
  const parsed = BookingSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
