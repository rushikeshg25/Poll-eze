"use client";
import usePublicHasVoted from "@/hooks/usePublicHasVoted";
import React, { useEffect, useState } from "react";
import PollPage from "./PollPage";
import { PollwithOptionT } from "@/types/PollwithOptions";

const PublicPoll = async ({ poll }: { poll: PollwithOptionT }) => {
  const [optionvoted, setoptionvoted] = useState<string>("");
  useEffect(() => {
    const optionId = usePublicHasVoted({ pollid: poll.id });
    if (!optionId) setoptionvoted("");
    else setoptionvoted(optionId);
  }, []);

  return (
    <div>
      <PollPage poll={poll} optionVoted={optionvoted} />
    </div>
  );
};

export default PublicPoll;
