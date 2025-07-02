import { prisma } from "@/lib/prisma";
import { ProfileFormType } from "@/validators/profile.validator";

//
// PUT
//
export const updateProfile = async (
  paramsId: string,
  parsed: ProfileFormType
) => {
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
