import { z } from "zod";

export const PollDataZod = z.object({
  title: z.string(),
  description: z.string().optional(),
});

export type PollDataT = z.infer<typeof PollDataZod>;
