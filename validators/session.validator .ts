import { z } from "zod";

export const SessionSchema = z.object({
  user: z.object({
    id: z.string(),
    email: z.string().email(),
  }),
});
export type sessionType = z.infer<typeof SessionSchema>;
