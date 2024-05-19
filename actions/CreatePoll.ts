"use server";
import { prisma } from "@/lib/db";
import type { PollT } from "@/types/PollData";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
type CreatePollT = {
  poll: PollT;
};

export const createPoll = async ({ poll }: CreatePollT) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  try {
    const prismaId = await prisma.user.findUnique({
      where: {
        externalId: userId,
      },
      select: {
        externalId: true,
      },
    });
    if (!prismaId) redirect("/sign-in");

    const newPoll = await prisma.poll.create({
      data: {
        PolltotalVotes: 0,
        title: poll.title,
        description: poll.description,
        Duration: Number(poll.Duration),
        user: {
          connect: { externalId: prismaId.externalId },
        },
      },
    });

    poll.Options.map(
      async (option) =>
        await prisma.option.create({
          data: {
            totalVotes: 0,
            title: option.title,
            PollId: newPoll.id,
            votes: 0,
          },
        })
    );
  } catch (error) {
    console.log("Error while creating poll:", error);
    return { success: false, message: "Something went wrong" };
  }
  return { success: true, message: "Poll Created" };
};
