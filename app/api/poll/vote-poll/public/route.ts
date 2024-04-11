import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(Request: Request) {
  const body = await Request.json();
  const optionId = body.optionId as string;

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

  if (!option)
    return NextResponse.json(
      { Error: "No Option/Poll Found" },
      { status: 500 }
    );

  return NextResponse.json({ option }, { status: 200 });
}
