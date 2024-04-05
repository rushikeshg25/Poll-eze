"use client";
import usePublicHasVoted from "@/hooks/usePublicHasVoted";
import React, { useEffect, useState } from "react";
import PollPage from "./PollPage";
import { PollwithOptionT } from "@/types/PollwithOptions";

const PublicPoll = async ({ poll }: { poll: PollwithOptionT }) => {
  const [voted, setHasVoted] = useState(false);
  useEffect(() => {
    async function getVotedvalue() {
      const { voted } = await usePublicHasVoted({ pollid: poll.id });
      setHasVoted(voted);
    }
    getVotedvalue();
  }, []);

  return (
    <div>
      <PollPage poll={poll} hasVotedParent={voted} />
    </div>
  );
};

export default PublicPoll;
