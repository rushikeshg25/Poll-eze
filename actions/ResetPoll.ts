"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const resetPoll = async (pollId: string) => {
  await prisma.poll.update({
    where: { id: pollId },
    data: {
      PolltotalVotes: 0,
      resetTime: new Date(),
    },
  });
  await prisma.option.updateMany({
    where: { PollId: pollId },
    data: {
      votes: 0,
      totalVotes: 0,
    },
  });
  await prisma.vote.deleteMany({
    where: { Pvote: pollId },
  });
  revalidatePath("/all-polls");
};
