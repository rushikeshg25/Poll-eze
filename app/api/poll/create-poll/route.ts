import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";
import type { PollT } from "@/types/PollData";

export async function POST(req: Request) {
  const body = await req.json();
  const poll = body.poll as PollT;
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const prismaId = await prisma.user.findUnique({
      where: {
        externalId: userId,
      },
      select: {
        externalId: true,
      },
    });
    if (!prismaId) return NextResponse.redirect(new URL("/sign-in", req.url));

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
    console.log("Create Entry Error", error);
  }

  return NextResponse.json({ userId }, { status: 200 });
}
