import { prisma } from "@/lib/prisma";
import { QueryType } from "@/validators/query.validator";
import { CreateRoomType, UpdateRoomType } from "@/validators/room.validator";

//
// GET for Member
//
export const queryRoom = async (query: QueryType) => {
  const skip = (query.page - 1) * query.limit;
  const rooms = await prisma.room.findMany({
    where: {
      OR: [
        { name: { contains: query.search, mode: "insensitive" } },
        { type: { contains: query.search, mode: "insensitive" } },
        { location: { contains: query.search, mode: "insensitive" } },
      ],
    },
    orderBy: { pricePerNight: query.sort },
    take: query.limit,
    skip,
  });

  const total = await prisma.room.count({
    where: {
      OR: [
        { name: { contains: query.search, mode: "insensitive" } },
        { type: { contains: query.search, mode: "insensitive" } },
        { location: { contains: query.search, mode: "insensitive" } },
      ],
    },
  });
  return {
    rooms,
    pagination: {
      total,
      page: query.page,
      limit: query.limit,
    },
  };
};

//
// GET for Admin
//
export const getAllRoom = async (query: string) => {
  const services = await prisma.room.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
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
      name: true,
      type: true,
      location: true,
      pricePerNight: true,
      maxGuests: true,
      roomSize: true,
      beds: true,
      amenities: true,
      image: true,
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
