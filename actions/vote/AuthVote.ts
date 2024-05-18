"use server";

type AuthVoteT = {
  optionId: string;
  userId: string;
  pollId: string;
};

import { prisma } from "@/lib/db";

export const AuthVote = async ({ optionId, userId, pollId }: AuthVoteT) => {
  try {
    const option = await prisma.option.update({
      where: {
        id: optionId,
      },
      data: {
        votes: {
          increment: 1,
        },
      },
    });
    const poll = await prisma.poll.update({
      where: {
        id: pollId,
      },
      data: {
        PolltotalVotes: {
          increment: 1,
        },
      },
      include: {
        options: true,
      },
    });
    const options = poll.options.map(async (option) => {
      await prisma.option.update({
        where: {
          id: option.id,
        },
        data: {
          totalVotes: {
            increment: 1,
          },
        },
      });
    });

    const vote = await prisma.vote.create({
      data: {
        option: optionId,
        userId: userId,
        Pvote: pollId,
      },
    });
  } catch (error) {
    console.log("Error while Voting:", error);
    return { success: "failed" };
  }
  return { success: "success" };
};
