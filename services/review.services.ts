import { prisma } from "@/lib/prisma";
import { CreateReviewType } from "@/validators/review.validator";

//
// GET
//
export const allReview = async () => await prisma.review.findMany();

//
// POST
//
export const createReview = async (parsed: CreateReviewType) => {
  const services = await prisma.review.create({
    data: parsed,
  });
  return services;
};

//
// DELETE
//
export const removeReview = async (paramsId: string) => {
  const services = await prisma.review.delete({
    where: {
      id: paramsId,
    },
  });
  return services;
};
