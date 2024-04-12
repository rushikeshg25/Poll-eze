import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(Request: Request) {
  const body = await Request.json();
  const optionId = body.optionId as string;
  const option = await prisma.option.findUnique({
    where: {
      id: optionId,
    },
  });

  await prisma.option.update({
    where: {
      id: optionId,
    },
    data: {
      votes: {
        increment: 1,
      },
    },
  });

  const poll = await prisma.poll.update({
    where: {
      id: option?.PollId,
    },
    data: {
      PolltotalVotes: {
        increment: 1,
      },
    },
    include: {
      options: true,
    },
  });

  if (!poll)
    return NextResponse.json(
      { Error: "No Option/Poll Found" },
      { status: 500 }
    );

  const options = poll.options.map(async (option) => {
    await prisma.option.update({
      where: {
        id: option.id,
      },
      data: {
        totalVotes: {
          increment: 1,
        },
      },
    });
  });

  return NextResponse.json({ option }, { status: 200 });
}
