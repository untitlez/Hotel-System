import { z } from "zod";

export const ReviewSchema = z.object({
  id: z.string().cuid(),
  name: z
    .string()
    .max(50, "Name must be less than 50 characters.")
    .trim()
    .optional(),
  email: z
    .union([z.string().email("Invalid email").trim(), z.literal("")])
    .transform((val) => (val === "" ? undefined : val))
    .optional(),
  review: z
    .string()
    .min(1, "Review is required.")
    .max(500, "Review must be less than 500 characters.")
    .trim(),
  createdAt: z.coerce.date(),
});

export const CreateReviewSchema = ReviewSchema.omit({
  id: true,
  createdAt: true,
});

export const ResponseReviewSchema = ReviewSchema.extend({
  createdAt: z.string(),
});

//
// Type
//
export type ReviewType = z.infer<typeof ReviewSchema>;
export type CreateReviewType = z.infer<typeof CreateReviewSchema>;
export type ResponseReviewType = z.infer<typeof ResponseReviewSchema>;

//
// Validate
//
export function validateReview(data: unknown) {
  const parsed = CreateReviewSchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
