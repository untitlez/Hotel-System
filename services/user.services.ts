import { prisma } from "@/lib/prisma";
import { UpdateUserType } from "@/validators/user.validator";

//
// GET
//
export const allUser = async (query: string) => {
  const services = await prisma.user.findMany({
    where: {
      role: "MEMBER",
      OR: [
        {
          profile: {
            is: {
              fullName: { contains: query, mode: "insensitive" },
            },
          },
        },
        {
          profile: {
            is: {
              gender: { contains: query, mode: "insensitive" },
            },
          },
        },
        {
          profile: {
            is: {
              address: { contains: query, mode: "insensitive" },
            },
          },
        },
        {
          profile: {
            is: {
              phone: { contains: query, mode: "insensitive" },
            },
          },
        },

        {
          email: { contains: query, mode: "insensitive" },
        },
      ],
    },
    select: {
      id: true,
      email: true,
      role: true,
      profile: true,
      bookings: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return services;
};

//
// GET by ID
//
export const listUser = async (paramsId: string) => {
  const services = await prisma.user.findUnique({
    where: {
      id: paramsId,
    },
    select: {
      email: true,
      role: true,
      profile: true,
      bookings: true,
    },
  });
  return services;
};

//
// PUT
//
export const updateUser = async (paramsId: string, parsed: UpdateUserType) => {
  const services = await prisma.user.update({
    where: {
      id: paramsId,
    },
    data: {
      email: parsed.email,
      password: parsed.password,
      role: parsed.role,
    },
    select: {
      email: true,
      role: true,
      updatedAt: true,
    },
  });
  return services;
};

//
// DELETE
//
export const removeUser = async (paramsId: string) => {
  const services = await prisma.user.delete({
    where: {
      id: paramsId,
    },
  });
  return services;
};
