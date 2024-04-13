"use client";
import React, { useEffect, useState, useRef } from "react";
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

type PollT = {
  poll: PollwithOptionT;
  optionVoted: string | null;
  voteApiHandler: (optionId: string) => void;
};

const PollPage = ({ poll, optionVoted, voteApiHandler }: PollT) => {
  const ref = useRef();
  const { toast } = useToast();
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  useEffect(() => {
    if (optionVoted) setHasVoted(true);
    else {
      setHasVoted(false);
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
      });
    }
  };

  return (
    <div className=' rounded-lg  dark:border-none  w-full'>
      <Card className=''>
        <CardHeader>
          <CardTitle className='flex justify-center text-2xl'>
            {poll.title}
          </CardTitle>
          {poll.description && (
            <CardDescription className='justify-center flex'>
              <>{poll.description}</>
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className='flex flex-col gap-3 lg:grid-cols-2 lg:grid min-w-min'>
          {poll.options.map((option) => (
            <button disabled={hasVoted}>
              <Votebar
                className={`dark:border-gray-300 border-gray-800 border-2 cursor-pointer ${
                  hasVoted && option.id === optionVoted ? "bg-green-500" : ""
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
        </CardContent>
        <CardFooter className='flex justify-center'>
          <>
            {hasVoted === true ? (
              <>You have Already Voted!</>
            ) : (
              <>Vote an Option </>
            )}
          </>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PollPage;
