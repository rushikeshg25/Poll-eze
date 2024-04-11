"use client";
import usePublicHasVoted from "@/hooks/usePublicHasVoted";
import React, { useEffect, useState } from "react";
import PollPage from "./PollPage";
import { PollwithOptionT } from "@/types/PollwithOptions";
import axios from "axios";
import useVotePoll from "@/hooks/useVotePoll";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

let optionvoted: string | null;

const PublicPoll = ({ poll }: { poll: PollwithOptionT }) => {
  const { userId } = useAuth();
  const router = useRouter();
  if (userId) router.push(`/poll/${poll.id}`);
  useEffect(() => {
    optionvoted = usePublicHasVoted({ pollid: poll.id });
    console.log(optionvoted);
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
