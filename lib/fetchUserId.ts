import { prisma } from "./db";

export const fetchUserId = async (id: string) => {
  const User = await prisma.user.findUnique({
    where: {
      externalId: id,
    },
  });
  return User;
};
