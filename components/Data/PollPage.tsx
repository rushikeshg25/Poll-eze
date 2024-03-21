"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Votebar } from "../ui/VoteBar";
import { PollwithOptionT } from "@/types/PollwithOptions";

type PollT = { poll: PollwithOptionT };
let totalVotes = 0;
let percent: number;
const PollPage = ({ poll }: PollT) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [optionVotes, setOptionVotes] = useState<number[]>([]);
  useEffect(() => {
    for (let i = 0; i < poll.options.length; i++)
      totalVotes += poll.options[i].votes;
    for (let i = 0; i < poll.options.length; i++) {
      setOptionVotes([...optionVotes]);
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-center'>{poll.title}</CardTitle>
        {poll.description && (
          <CardDescription>{poll.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className='flex flex-col gap-3 lg:grid-cols-2 lg:grid min-w-min'>
        {poll.options.map((option) => (
          <Votebar
            key={option.id}
            option={option.title}
            value={hasVoted ? 0 : 33}
            onClick={() => {
              setHasVoted(true);
            }}
          />
        ))}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default PollPage;
