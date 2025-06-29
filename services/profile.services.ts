import { prisma } from "@/lib/prisma";
import { ProfileType } from "@/validators/profile.validator";

//
// GET by ID
//
export const listProfile = async (paramsId: string) => {
  const services = await prisma.profile.findUnique({
    where: {
      userId: paramsId,
    },
    select: {
      userId: true,
      fullName: true,
      gender: true,
      birthday: true,
      address: true,
      phone: true,
      status: true,
    },
  });
  return services;
};

//
// PUT
//
export const updateProfile = async (paramsId: string, parsed: ProfileType) => {
  const services = await prisma.profile.update({
    where: {
      userId: paramsId,
    },
    data: parsed,
  });
  return services;
};

//
// DELETE
//
export const removeProfile = async (paramsId: string) => {
  const services = await prisma.profile.delete({
    where: {
      userId: paramsId,
    },
  });
  return services;
};
