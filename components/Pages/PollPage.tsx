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
import axios from "axios";
import { Option } from "@prisma/client";
import { useToast } from "@/components/ui/use-toast";

// useEffect(() => {
//   if (optionVoted !== null) setHasVoted(true);

//   for (let i = 0; i < poll.options.length; i++)
//     totalVotes += poll.options[i].votes;
//   console.log(hasVoted);
// }, []);

// useEffect(() => {
//   for (let i = 0; i < poll.options.length; i++) {
//     setOptionVotes([...optionVotes]);
//   }
// }, [hasVoted]);

type PollT = { poll: PollwithOptionT; optionVoted: string | null };
let totalVotes = 0;
let percent: number;
const PollPage = ({ poll, optionVoted }: PollT) => {
  const { toast } = useToast();
  const [hasVoted, setHasVoted] = useState(false);
  const [optionVotes, setOptionVotes] = useState<number[]>([]);

  // useEffect(() => {
  //   if (optionVoted !== null) setHasVoted((i) => true);
  //   console.log(hasVoted);
  //   console.log(hasVoted === true);
  // }, []);

  const voteHandler = async (option: Option) => {
    try {
      await axios.post("http://localhost:3000/api/poll/create-poll", {
        poll: poll,
      });
      setHasVoted(true);
      toast({
        title: `Voted for ${option.title}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "We ran into some Issue",
        description: JSON.stringify(error),
      });
    }
  };

  return (
    <div className='border-2 rounded-lg border-gray-900 dark:border-none'>
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
              className='dark:border-gray-300 border-gray-800  border-2'
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
          ))}
        </CardContent>
        <CardFooter>
          {hasVoted === true ? <>Already Voted</> : <>vote</>}
        </CardFooter>
      </Card>
    </div>
  );
};

export default PollPage;
