import { prisma } from "@/lib/db";

const hasUserVoted = async (userId: string, pollId: string) => {
  const poll = await prisma.poll.findUnique({
    where: {
      id: pollId,
    },
    include: {
      Voters: true,
    },
  });

  return poll?.Voters.includes(userId);
};

export default hasUserVoted;
