import { z } from "zod";

export const SessionSchema = z.object({
  user: z.object({
    id: z.string(),
    email: z.string().email(),
     role: z.enum(["ADMIN", "MEMBER"]),
  }),
});
export type SessionType = z.infer<typeof SessionSchema>;
