"use client";
import usePublicHasVoted from "@/hooks/usePublicHasVoted";
import React, { useEffect, useState } from "react";
import PollPage from "./PollPage";
import { PollwithOptionT } from "@/types/PollwithOptions";

const PublicPoll = ({ poll }: { poll: PollwithOptionT }) => {
  const [optionvoted, setoptionvoted] = useState<string>("");
  useEffect(() => {
    const optionId = usePublicHasVoted({ pollid: poll.id });
    // console.log(optionId);
    if (!optionId) setoptionvoted("");
    else setoptionvoted(optionId);
    // console.log("state", optionvoted);
  }, []);

  return (
    <div>
      <PollPage poll={poll} optionVoted={optionvoted} />
    </div>
  );
};

export default PublicPoll;
