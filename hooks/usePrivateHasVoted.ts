import hasUserVoted from "@/lib/hasUserVoted";

type TYPET = {
  userId: string;
  pollId: string;
};

const usePrivateHasVoted = async ({ pollId, userId }: TYPET) => {
  const hasVoted = await hasUserVoted(userId, pollId);
  return hasVoted;
};
