import { Poll, Option } from "@prisma/client";

export interface PollwithOptionT extends Poll {
  options: Option[];
}
