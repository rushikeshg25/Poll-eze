import { z } from "zod";
type OptionT = {
  title: string;
  votes: number;
};

export const PollDataZod = z.object({
  title: z.string(),
  description: z.string().optional(),
});

export type PollDataT = z.infer<typeof PollDataZod>;

export type PollT = {
  UserId: string;
  title: string;
  description: string;
  PollType: string;
  Options: OptionT[];
  Duration: Number;
};
