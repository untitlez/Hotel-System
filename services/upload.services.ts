import { prisma } from "@/lib/prisma";
import { UpdateProfileType } from "@/validators/profile.validator";

//
// PUT
//
export const updateImageProfile = async (
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
