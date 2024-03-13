import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function DELETE(Request: Request) {
  const { userId } = auth();
  console.log("routeHandler", userId);
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
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ userId }, { status: 200 });
}
