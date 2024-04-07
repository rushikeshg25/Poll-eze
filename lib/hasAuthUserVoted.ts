import { prisma } from "./db";

type hasAuthUservotedT = {
  pollId: string;
  userId: string;
};

const hasAuthUservoted = async ({ pollId, userId }: hasAuthUservotedT) => {
  const poll = await prisma.poll.findUnique({
    where: {
      id: pollId,
    },
    include: {
      Voters: true,
    },
  });

  let n = poll?.Voters.length as number;
  if (n === 0) return null;
  for (let i = 0; i < n; i++) {
    if (poll?.Voters[i].userId === userId) {
      return poll.Voters[i].option;
    }
  }
  return null;
};

export default hasAuthUservoted;
