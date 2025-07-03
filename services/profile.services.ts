import { prisma } from "@/lib/prisma";
import { UpdateProfileType } from "@/validators/profile.validator";

//
// PUT
//
export const updateProfile = async (
  paramsId: string,
  parsed: UpdateProfileType
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
