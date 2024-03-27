import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

//What a create Poll request will look like
type PolltestT = {
  title: string;
  description: string;
  Optionstest: {
    title: string;
  }[];
};

const PollTest: PolltestT = {
  title: "Who is Rushikesh",
  description: "",
  Optionstest: [
    { title: "a" },
    { title: "Mb" },
    { title: "Nac" },
    { title: "Chennai" },
  ],
};

export async function POST(req: Request) {
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
    console.log("prismaId", prismaId, prismaId?.externalId);
    if (!prismaId) return {};
    const newPoll = await prisma.poll.create({
      data: {
        PolltotalVotes: 0,
        title: PollTest.title,
        description: PollTest.description,
        user: {
          connect: { externalId: prismaId.externalId },
        },
      },
    });

    PollTest.Optionstest.map(
      async (option) =>
        await prisma.option.create({
          data: {
            totalVotes: 0,
            title: option.title,
            PollId: newPoll.id,
            votes: 0, // Assuming initial votes count is 0
          },
        })
    );
  } catch (error) {
    console.log("Create Entry Error", error);
  }

  return NextResponse.json({ userId }, { status: 200 });
}
