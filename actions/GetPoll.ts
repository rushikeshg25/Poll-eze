"use server";

import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
// export const dynamic = "force-dynamic";

export const getPolls = async ({
  search,
  offset = 0,
  limit = 6,
  userId,
}: {
  search?: string | undefined;
  offset?: number;
  limit?: number;
  userId: string | null;
}) => {
  if (!userId) redirect("/sign-in");
  const user = await prisma.user.findUnique({
    where: {
      externalId: userId,
    },
    select: {
      id: true,
    },
  });
  const polls = await prisma.poll.findMany({
    where: {
      UserId: user?.id,
      title: {
        contains: search,
        mode: "insensitive",
      },
    },
    orderBy: {
      created: "desc",
    },
    skip: offset,
    take: limit,
    include: {
      options: true,
    },
  });
  const totalCount = await prisma.poll.count({
    where: {
      title: {
        contains: search,
      },
    },
  });
  const totalPages = Math.ceil(totalCount / limit);
  return { polls, totalCount, totalPages };
};

export const getPollbyTitle = async (pollID: string) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  let poll;
  try {
    poll = await prisma.poll.findUnique({
      where: {
        id: pollID,
      },
      include: {
        options: true,
      },
    });
  } catch (error) {
    console.log("error while fetching Poll:", error);
    return { success: false, message: "Something went wrong" };
  }
  return { success: true, message: "Poll Fetched", poll: poll };
};

export const getPoll = async (pollId: string) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  let polls;
  try {
    polls = await prisma.user.findUnique({
      where: {
        externalId: userId,
      },
      select: {
        polls: {
          include: {
            options: true,
          },
        },
      },
    });
  } catch (error) {
    console.log("error while fetching Poll:", error);
    return { success: false, message: "Something went wrong" };
  }
  return { success: true, message: "Poll Fetched", polls: polls };
};
