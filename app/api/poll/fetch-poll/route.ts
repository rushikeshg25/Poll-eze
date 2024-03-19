import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function GET(Request: Request) {
  const { userId } = auth();
  console.log("routeHandler", userId);
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  let posts;
  try {
    posts = await prisma.user.findUnique({
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
    console.log(posts);
    console.log(posts?.polls);
  } catch (error) {
    console.log("error while fetching Poll:", error);
  }

  return NextResponse.json({ posts }, { status: 200 });
}
