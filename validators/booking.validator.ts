import { z } from "zod";

export const BookingSchema = z.object({
  id: z.string().cuid(),
  userId: z.string().cuid(),
  roomId: z.string().cuid(),
  statusPaid: z.enum(["PENDING", "CONFIRMED", "CANCELLED"]),
  request: z
    .object({
      roomType: z.string().optional(),
      bedType: z.string().optional(),
      note: z.coerce.string().trim().optional(),
    })
    .optional(),
  checkInDate: z.coerce.date(),
  checkOutDate: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export const CreateBookingSchema = BookingSchema.omit({
  id: true,
  createdAt: true,
});

export const ResponseBookingSchema = BookingSchema.extend({
  checkInDate: z.string(),
  checkOutDate: z.string(),
  createdAt: z.string(),
});

//
// Type
//
export type CreateBookingType = z.infer<typeof CreateBookingSchema>;
export type ResponseBookingType = z.infer<typeof ResponseBookingSchema>;

//
// Validate
//
export function validateCreateBooking(data: unknown) {
  const parsed = CreateBookingSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
