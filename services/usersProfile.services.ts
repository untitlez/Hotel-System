import { prisma } from "@/lib/prisma";

export const listProfile = async (paramsId: string) => {
  const services = await prisma.userProfile.findUnique({
    where: {
      id: paramsId,
    },
  });
  return services;
};

export const updateProfile = async (paramsId: string, parsed: any) => {
  const services = await prisma.userProfile.update({
    where: {
      id: paramsId,
    },
    data: {
      fullName: parsed.fullName,
      gender: parsed.gender,
      birthday: parsed.birthday,
      address: parsed.address,
      phone: parsed.phone,
    },
  });
  return services;
};

export const removeProfile = async (paramsId: string) => {
  const services = await prisma.userProfile.delete({
    where: {
      id: paramsId,
    },
  });
  return services;
};
