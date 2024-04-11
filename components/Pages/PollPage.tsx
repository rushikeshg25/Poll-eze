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
import { Option } from "@prisma/client";
import { useToast } from "@/components/ui/use-toast";
import { boolean } from "zod";

// useEffect(() => {
//   if (optionVoted !== null) setHasVoted(true);

//   for (let i = 0; i < poll.options.length; i++)
//     totalVotes += poll.options[i].votes;
//   console.log(hasVoted);
// }, []);

type PollT = {
  poll: PollwithOptionT;
  optionVoted: string | null;
  voteApiHandler: (optionId: string) => void;
};

const PollPage = ({ poll, optionVoted, voteApiHandler }: PollT) => {
  const { toast } = useToast();
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  useEffect(() => {
    if (optionVoted === null) setHasVoted(false);
    else {
      setHasVoted(true);
    }
  }, []);

  const voteHandler = async (option: Option) => {
    try {
      await voteApiHandler(option.id);
      setHasVoted(true);
      toast({
        title: `Voted for ${option.title}`,
      });
    } catch (error) {
      console.log(error);
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
              className='dark:border-gray-300 border-gray-800  border-2 cursor-pointer'
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
