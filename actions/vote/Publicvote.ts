"use server";
type PublicvoteT = {
  optionId: string;
};

import { prisma } from "@/lib/db";

export const votePublicPoll = async ({ optionId }: PublicvoteT) => {
  const option = await prisma.option.findUnique({
    where: {
      id: optionId,
    },
  });

  await prisma.option.update({
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
      id: option?.PollId,
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
  return { success: "success" };
};
