import { prisma } from "@/lib/prisma";
import { BookingType } from "@/validators/booking.validator";

//
// GET
//
export const allBooking = async () => await prisma.booking.findMany();

//
// POST
//
export const createBooking = async (parsed: BookingType) => {
  const services = await prisma.booking.create({
    data: parsed,
  });
  return services;
};

//
// GET by ID
//
export const listBooking = async (paramsId: string) => {
  const services = await prisma.booking.findUnique({
    where: {
      id: paramsId,
    },
    select: {
      id: true,
      userId: true,
      roomId: true,
      checkInDate: true,
      checkOutDate: true,
    },
  });
  return services;
};

//
// DELETE
//
export const removeBooking = async (paramsId: string) => {
  const services = await prisma.booking.delete({
    where: {
      id: paramsId,
    },
  });
  return services;
};
