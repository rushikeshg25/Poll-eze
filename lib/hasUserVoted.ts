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

  return poll?.Voters.includes();
  //Find the Owner
  //Stop him from voting for himself
};

export default hasUserVoted;
