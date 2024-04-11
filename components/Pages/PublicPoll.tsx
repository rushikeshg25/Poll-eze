"use client";
import usePublicHasVoted from "@/hooks/usePublicHasVoted";
import React, { useEffect, useState } from "react";
import PollPage from "./PollPage";
import { PollwithOptionT } from "@/types/PollwithOptions";
import axios from "axios";

const PublicPoll = ({ poll }: { poll: PollwithOptionT }) => {
  const [optionvoted, setoptionvoted] = useState<string>("");
  useEffect(() => {
    const optionId = usePublicHasVoted({ pollid: poll.id });
    // console.log(optionId);
    if (!optionId) setoptionvoted("");
    else setoptionvoted(optionId);
    // console.log("state", optionvoted);
  }, []);

  const voteApiHandler = async (optionId: string) => {
    await axios.post("http://localhost:3000/api/poll/vote-poll/publicuser", {
      optionId: optionId,
    });
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
