import { prisma } from "@/lib/prisma";
import { CreateBookingType } from "@/validators/booking.validator";

//
// GET
//
export const allBooking = async () => await prisma.booking.findMany();

//
// POST
//
export const createBooking = async (parsed: CreateBookingType) => {
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
      statusPaid: true,
      request: true,
      checkInDate: true,
      checkOutDate: true,
      createdAt: true,
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
