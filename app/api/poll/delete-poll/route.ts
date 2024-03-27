import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function DELETE(Request: Request) {
  const body = await req.json();
  const poll = body.poll as PollT;
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

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
        PollId: "2f314fa8-2f72-4e02-90b9-db184f309bc0",
      },
    });
    const PolltobeDeleted = await prisma.poll.delete({
      where: {
        id: "2f314fa8-2f72-4e02-90b9-db184f309bc0",
      },
    });
  } catch (error) {
    console.log("deleted", error);
  }

  return NextResponse.json({ userId }, { status: 200 });
}
