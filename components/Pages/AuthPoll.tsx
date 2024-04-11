"use client";
import { PollwithOptionT } from "@/types/PollwithOptions";
import PollPage from "./PollPage";
import axios from "axios";

type AuthPollT = {
  poll: PollwithOptionT;
  optionVoted: string | null;
  userId: string;
};

const AuthPoll = ({ poll, optionVoted, userId }: AuthPollT) => {
  const voteApiHandler = async (optionId: string) => {
    await axios.post("http://localhost:3000/api/poll/vote-poll/authorized", {
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
