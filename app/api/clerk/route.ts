import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { prisma } from "@/lib/db";

type PayloadDataT = {
  first_name: string;
  last_name: string;
  id: string;
};

const webhookSecret = process.env.WEBHOOK_SECRET || ``;

async function validateRequest(request: Request) {
  const payloadString = await request.text();
  const headerPayload = headers();

  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
  };
  const wh = new Webhook(webhookSecret);
  return wh.verify(payloadString, svixHeaders) as WebhookEvent;
}

export async function POST(request: Request) {
  const payload = await validateRequest(request);
  // console.log("hello");

  const UserId = payload.data.id as string;
  // console.log("clerk", UserId);
  const firstName = payload.data.first_name;
  const lastName = payload.data.last_name;

  // console.log(firstName, lastName);

  await prisma.user.upsert({
    where: {
      externalId: UserId,
    },
    update: {
      firstName: firstName,
      lastName: lastName,
    },
    create: {
      externalId: UserId,
      firstName: firstName,
      lastName: lastName,
    },
  });
  return Response.json({ message: "Received" });
}
