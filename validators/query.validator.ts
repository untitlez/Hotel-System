import { z } from "zod";

export const QuerySchema = z.object({
  search: z.string().optional(),
  sort: z.enum(["asc", "desc"]).default("desc").optional(),
  page: z.coerce.number().min(1),
  limit: z.coerce.number().min(1).max(100),
});

export type QueryType = z.infer<typeof QuerySchema>;

export function validateQuery(data: unknown) {
  const parsed = QuerySchema.safeParse(data);
  if (!parsed.success) throw parsed.error;
  return parsed.data;
}
