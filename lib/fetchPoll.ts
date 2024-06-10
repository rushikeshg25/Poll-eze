import { prisma } from "./db";

export const fetchPoll = async (id: string) => {
  const poll = await prisma.poll.findUnique({
    where: {
      id: id,
    },
    include: {
      options: {
        orderBy: {
          title: "asc",
        },
      },
    },
  });
  return poll;
};
