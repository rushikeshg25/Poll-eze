import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function GET(Request: Request) {
  const { userId } = auth();
  console.log("routeHandler", userId);
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
  } catch (error) {
    console.log("error", error);
  }

  return NextResponse.json({ userId }, { status: 200 });
}
