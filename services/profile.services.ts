import { prisma } from "@/lib/prisma";

export const listProfile = async (paramsId: string) => {
  const services = await prisma.profile.findUnique({
    where: {
      userId: paramsId,
    },
  });
  return services;
};

export const updateProfile = async (paramsId: string, parsed: any) => {
  const services = await prisma.profile.update({
    where: {
      userId: paramsId,
    },
    data: {
      fullName: parsed.fullName,
      gender: parsed.gender,
      birthday: parsed.birthday,
      address: parsed.address,
      phone: parsed.phone,
      status: parsed.status,
    },
  });
  return services;
};

export const removeProfile = async (paramsId: string) => {
  const services = await prisma.profile.delete({
    where: {
      userId: paramsId,
    },
  });
  return services;
};
