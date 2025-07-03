import { prisma } from "@/lib/prisma";
import { CreateRoomType, UpdateRoomType } from "@/validators/room.validator";

//
// GET
//
export const queryRoom = async (query: string) => {
  const services = await prisma.room.findMany({
    where: {
      OR: [
        { roomNumber: { contains: query, mode: "insensitive" } },
        { location: { contains: query, mode: "insensitive" } },
        { type: { contains: query, mode: "insensitive" } },
      ],
    },
  });
  return services;
};

//
// POST
//
export const createRoom = async (parsed: CreateRoomType) => {
  const services = await prisma.room.create({
    data: parsed,
  });
  return services;
};

//
// GET by ID
//
export const listRoom = async (paramsId: string) => {
  const services = await prisma.room.findUnique({
    where: {
      id: paramsId,
    },
    select: {
      roomNumber: true,
      location: true,
      type: true,
      description: true,
      pricePerNight: true,
    },
  });
  return services;
};

///
// PUT
//
export const updateRoom = async (paramsId: string, parsed: UpdateRoomType) => {
  const services = await prisma.room.update({
    where: {
      id: paramsId,
    },
    data: parsed,
  });
  return services;
};

//
// DELETE
//
export const removeRoom = async (paramsId: string) => {
  const services = await prisma.room.delete({
    where: {
      id: paramsId,
    },
  });
  return services;
};
