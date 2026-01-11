import bcryptjs from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { LoginType } from "@/validators/login.validator";

export const loginAccount = async ({ email, password }: LoginType) => {
  const services = await prisma.user.findUnique({
    where: { email },
  });
  if (!services) return null;
  if (!services.password) return null;

  const isMatch = await bcryptjs.compare(password, services.password);
  if (!isMatch) return null;

  return {
    id: services.id,
    email: services.email,
    image: services.image,
    role: services.role,
  };
};
