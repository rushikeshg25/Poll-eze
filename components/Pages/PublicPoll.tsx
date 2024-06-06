/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import PollPage from "./PollPage";
import { PollwithOptionT } from "@/types/PollwithOptions";
import { useMutation, useQuery } from "@tanstack/react-query";
import useVotePoll from "@/hooks/useVotePoll";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { votePublicPoll } from "@/actions/vote/Publicvote";
import ClipLoader from "react-spinners/ClipLoader";

const hasPublicUserVoted = async ({
  pollid,
  resetTime,
}: {
  pollid: string;
  resetTime: Date | undefined | null;
}) => {
  const res = await localStorage.getItem(pollid);
  if (!res) {
    return null;
  }

  const data = JSON.parse(res) as { optionId: string; voteTime: Date };

  if (resetTime) {
    const vote = new Date(data.voteTime);
    const reset = new Date(resetTime as Date);
    if (vote < reset) {
      localStorage.removeItem(pollid);
      return null;
    }
  }
  return data.optionId;
};

const PublicPoll = ({ poll }: { poll: PollwithOptionT }) => {
  const { userId } = useAuth();
  const router = useRouter();
  if (userId) router.push(`/poll/${poll.id}`);

  const { data: optionVoted, isLoading } = useQuery({
    queryKey: [poll.id],
    queryFn: async () => {
      const option = await hasPublicUserVoted({
        pollid: poll.id,
        resetTime: poll.resetTime,
      });
      return option;
    },
    refetchOnWindowFocus: true,
  });

  const { mutate: server_votePublicPoll } = useMutation({
    mutationFn: votePublicPoll,
  });

  const voteApiHandler = async (optionId: string) => {
    await server_votePublicPoll({
      optionId: optionId,
    });
    await useVotePoll(optionId, poll.id);
  };

  if (isLoading)
    return (
      <div className='d-flex justify-content-center'>
        <ClipLoader />
      </div>
    );
  return (
    <div>
      <PollPage
        poll={poll}
        optionVoted={optionVoted as string | null}
        voteApiHandler={voteApiHandler}
      />
    </div>
  );
};

export default PublicPoll;
