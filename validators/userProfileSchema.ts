import { z } from "zod";

export const userProfileSchema = z.object({
  id: z.string(),
  fullName: z.string().optional().nullable(),
  gender: z.string().optional().nullable(),
  birthday: z.date().optional().nullable(),
  address: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type userProfileType = z.infer<typeof userProfileSchema>;
