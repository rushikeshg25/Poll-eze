"use client";
import { Votebar } from "./VoteBar";
import React from "react";
import { PollwithOptionT } from "@/types/PollwithOptions";

const LandingPagePollOptions = ({ poll }: { poll: PollwithOptionT | null }) => {
  const [hasVoted, setHasVoted] = React.useState(false);
  const [optionVoted, setOptionVoted] = React.useState<string | null>(null);

  const voteHandler = (option: PollwithOptionT) => {
    setHasVoted(true);
    setOptionVoted(option.id);
  };

  return (
    <div className='flex items-center flex-col gap-3 lg:grid-cols-2 lg:grid min-w-min'>
      {poll?.options.map((option) => (
        <button key={option.id} disabled={hasVoted}>
          <Votebar
            className={`dark:border-gray-300 border-gray-800 border-2 cursor-pointer min-w-52 ${
              hasVoted && option === optionVoted ? "bg-green-500" : ""
            }`}
            key={option.id}
            option={option.title}
            value={
              hasVoted == true
                ? ((option.votes + 1) / (option.totalVotes + 1)) * 100
                : 0
            }
            onClick={() => {
              voteHandler(option);
            }}
          />
        </button>
      ))}
    </div>
  );
};

export default LandingPagePollOptions;
