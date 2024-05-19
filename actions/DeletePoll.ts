"use server";

type DeletePollT = {
  pollId: string;
};
import { prisma } from "@/lib/db";

export const DeletePollAction = async ({ pollId }: DeletePollT) => {
  await prisma.vote.deleteMany({
    where: {
      Pvote: pollId,
    },
  });
  await prisma.option.deleteMany({
    where: {
      PollId: pollId,
    },
  });
  await prisma.poll.delete({
    where: {
      id: pollId,
    },
  });
  return { success: true, message: "Poll Deleted" };
};
