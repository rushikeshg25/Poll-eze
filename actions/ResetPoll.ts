"use server";
import { prisma } from "@/lib/db";

export const resetPoll = async (pollId: string) => {
  await prisma.poll.update({
    where: { id: pollId },
    data: {
      PolltotalVotes: 0,
    },
  });
  await prisma.option.updateMany({
    where: { PollId: pollId },
    data: {
      votes: 0,
    },
  });
  await prisma.vote.deleteMany({
    where: { Pvote: pollId },
  });
};
