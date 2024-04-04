import { prisma } from "@/lib/db";

const hasUserVoted = async (userId: string, pollId: string) => {
  const poll = await prisma.poll.findUnique({
    where: {
      id: pollId,
    },
  });

  return poll?.Voters.includes(userId);
};

export default hasUserVoted;
