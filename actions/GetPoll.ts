"use server";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

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

export const getPolls = async (pollId: string) => {
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
