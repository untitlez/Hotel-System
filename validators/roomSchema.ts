import { z } from "zod";

export const roomSchema = z.object({
  id: z.string().optional(),
  number: z.string(),
  location: z.string(),
  type: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  pricePerNight: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().nullable().optional(),
});

export type roomType = z.infer<typeof roomSchema>;
