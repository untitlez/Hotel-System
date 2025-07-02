import { prisma } from "@/lib/prisma";
import { SignUpType } from "@/validators/sign-up.validator";
import bcryptjs from "bcryptjs";

//
// POST
//
export const createAccount = async (parsed: SignUpType) => {
  const hashedPassword = await bcryptjs.hash(parsed.password, 10);
  const services = await prisma.user.create({
    data: {
      email: parsed.email,
      password: hashedPassword,
      profile: {
        create: {},
      },
    },
    include: {
      profile: true,
    },
  });

  return {
    id: services.id,
    email: services.email,
    role: services.role,
    createdAt: services.createdAt,
  };
};
