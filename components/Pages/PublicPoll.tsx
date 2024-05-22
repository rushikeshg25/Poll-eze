"use client";
import usePublicHasVoted from "@/hooks/usePublicHasVoted";
import React, { useEffect, useState } from "react";
import PollPage from "./PollPage";
import { PollwithOptionT } from "@/types/PollwithOptions";
import { useMutation } from "@tanstack/react-query";
import useVotePoll from "@/hooks/useVotePoll";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { votePublicPoll } from "@/actions/vote/Publicvote";

let optionvoted: string | null;

const PublicPoll = ({ poll }: { poll: PollwithOptionT }) => {
  const { userId } = useAuth();
  const router = useRouter();
  if (userId) router.push(`/poll/${poll.id}`);
  useEffect(() => {
    optionvoted = usePublicHasVoted({ pollid: poll.id });
  }, [poll.id]);

  const { mutate: server_votePublicPoll } = useMutation({
    mutationFn: votePublicPoll,
  });

  const voteApiHandler = async (optionId: string) => {
    await server_votePublicPoll({
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
