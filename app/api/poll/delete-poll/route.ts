import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function POST(Request: Request) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const body = await Request.json();
  console.log("body", body);
  const PollId = body.pollId;

  try {
    const OptionstobeDeleted = await prisma.option.deleteMany({
      where: {
        PollId: PollId,
      },
    });
    const PolltobeDeleted = await prisma.poll.delete({
      where: {
        id: PollId,
      },
    });
  } catch (error) {
    console.log("deleted", error);
  }

  return NextResponse.json({ userId }, { status: 200 });
}
