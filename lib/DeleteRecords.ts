import { prisma } from "@/lib/db";

const DeleteAll = async () => {
  await prisma.user.deleteMany();
};

DeleteAll();
