"use client";
import usePublicHasVoted from "@/hooks/usePublicHasVoted";
import React, { useEffect, useState } from "react";
import PollPage from "./PollPage";
import { PollwithOptionT } from "@/types/PollwithOptions";
import axios from "axios";
import useVotePoll from "@/hooks/useVotePoll";

let optionvoted: string | null;

const PublicPoll = ({ poll }: { poll: PollwithOptionT }) => {
  useEffect(() => {
    optionvoted = usePublicHasVoted({ pollid: poll.id });
  }, []);

  const voteApiHandler = async (optionId: string) => {
    await axios.post("http://localhost:3000/api/poll/vote-poll/publicuser", {
      optionId: optionId,
    });
    await useVotePoll(optionId, poll.id);
  };

  return (
    <div>
      <PollPage
        poll={poll}
        optionVoted={optionvoted}
        voteApiHandler={voteApiHandler}
      />
    </div>
  );
};

export default PublicPoll;
