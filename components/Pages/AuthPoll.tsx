"use client";
import { PollwithOptionT } from "@/types/PollwithOptions";
import PollPage from "./PollPage";
import { useMutation } from "@tanstack/react-query";
import { AuthVote } from "@/actions/vote/AuthVote";

type AuthPollT = {
  poll: PollwithOptionT;
  optionVoted: string | null;
  userId: string;
};

const AuthPoll = ({ poll, optionVoted, userId }: AuthPollT) => {
  const { mutate: server_AuthVote } = useMutation({
    mutationFn: AuthVote,
  });

  const voteApiHandler = async (optionId: string) => {
    const response = await server_AuthVote({
      optionId: optionId,
      userId: userId,
      pollId: poll.id,
    });
  };

  return (
    <PollPage
      poll={poll}
      optionVoted={optionVoted}
      voteApiHandler={voteApiHandler}
    />
  );
};

export default AuthPoll;
