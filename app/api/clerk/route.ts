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

  const UserId = payload.data.id as string;
  //@ts-ignore
  const firstName = payload.data.first_name;
  //@ts-ignore
  const lastName = payload.data.last_name;
  //@ts-ignore
  const email = payload.data.email_addresses[0].email_address as string;

  if (payload.type === "user.created") {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      await prisma.user.create({
        data: {
          externalId: UserId,
          firstName: firstName,
          lastName: lastName,
          email: email,
        },
      });
    }
  } else if (payload.type === "user.updated") {
    await prisma.user.upsert({
      where: {
        externalId: UserId,
      },
      update: {
        firstName: firstName,
        lastName: lastName,
      },
      create: {
        email: email,
        externalId: UserId,
        firstName: firstName,
        lastName: lastName,
      },
    });
  }
  //check if user is already present
  else if (payload.type === "user.deleted") {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        externalId: UserId,
      },
    });
    if (user) {
      await prisma.user.delete({
        where: {
          email: email,
          externalId: UserId,
        },
      });
    }
  }

  return Response.json({ message: "Received" });
}
