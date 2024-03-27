import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function DELETE(Request: Request) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const body = await Request.json();
  const PollId = body.pollId as string;

  try {
    //Finding the id for User
    // const prismaId = await prisma.user.findUnique({
    //   where: {
    //     externalId: userId,
    //   },
    //   select: {
    //     id: true,
    //   },
    // });
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
