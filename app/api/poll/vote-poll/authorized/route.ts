import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function POST(Request: Request) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const body = await Request.json();
  const optionId = body.optionId as string;
  const id = body.userId as string;
  const pollId = body.pollId as string;

  try {
    const option = await prisma.option.update({
      where: {
        id: optionId,
      },
      data: {
        totalVotes: {
          increment: 1,
        },
        votes: {
          increment: 1,
        },
      },
    });

    const vote = await prisma.vote.create({
      data: {
        option: optionId,
        userId: id,
        Pvote: pollId,
      },
    });
  } catch (error) {
    console.log("Error while Voting:", error);
  }

  return NextResponse.json({ success: "Voted" }, { status: 200 });
}
