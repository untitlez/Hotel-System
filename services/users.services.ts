import { prisma } from "@/lib/prisma";

export const getAllUser = async () => {
  const services = await prisma.user.findMany({
    where: {
      role: "MEMBER",
      deletedAt: null,
    },
    select: {
      profile: true,
      bookings: true,
      createdAt: true,
    },
  });
  return services;
};

export const createNewUser = async (parsed: any) => {
  const services = await prisma.user.create({
    data: parsed,
  });
  return services;
};

export const listUser = async (paramsId: string) => {
  const services = await prisma.user.findUnique({
    where: {
      id: paramsId,
    },
    select: {
      role: true,
      profile: true,
      bookings: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
    },
  });

  return services;
};

export const updateUser = async (paramsId: string, parsed: any) => {
  const services = await prisma.user.update({
    where: {
      id: paramsId,
    },
    data: {
      email: parsed.name,
      role: parsed.name,
    },
  });
  return services;
};

export const removeUser = async (paramsId: string) => {
  const services = await prisma.user.update({
    where: {
      id: paramsId,
      deletedAt: null,
    },
    data: {
      deletedAt: new Date(),
    },
  });
  return services;
};
