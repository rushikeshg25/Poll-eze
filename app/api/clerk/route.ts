import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { prisma } from "@/lib/db";

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
  console.log(payload);
  console.log("email:", payload.data.email_addresses);
  const UserId = payload.data.id;
  //   email
  //   await prisma.user.upsert({
  //     where: {
  //       externalId: UserId as String,
  //     },
  //     update:{
  //         firstName:
  //     }
  //   });
  return Response.json({ message: "Received" });
}
