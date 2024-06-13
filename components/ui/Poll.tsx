"use client";
import { Label } from "@/components/ui/label";
import { PollwithOptionT } from "@/types/PollwithOptions";
import { RadioGroup } from "@/components/ui/radio-group";
import { Card } from "./card";
import DeletePoll from "../PollUtilites/DeletePoll";
import CopyClipboard from "../PollUtilites/CopyClipboard";
import ResetPoll from "../PollUtilites/ResetPoll";
import timeUntil from "@/lib/timeuntil";
import OpenPoll from "../PollUtilites/OpenPoll";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCallback, useEffect, useState } from "react";
import PollVoteBar from "../PollUtilites/PollVoteBar";

type PollPropsT = {
  poll: PollwithOptionT;
};

const Poll = ({ poll }: PollPropsT) => {
  const { isOpen, timeLeftString } = timeUntil(
    new Date(poll.created),
    poll.Duration as number
  );

  const [optionPercentage, setOptionPercentage] = useState<
    { optionid: string; percentage: Number }[]
  >([]);
  const calculateOptionPercentages = useCallback(() => {
    const newOptionPercentages = poll.options.map((option) => {
      return {
        optionid: option.id,
        percentage: Math.floor((option.votes / option.totalVotes) * 100),
      };
    });
    setOptionPercentage(newOptionPercentages);
  }, [poll.options]);

  const resetHandler = () => {
    setOptionPercentage(
      poll.options.map((option) => ({ optionid: option.id, percentage: 0 }))
    );
  };
  useEffect(() => {
    calculateOptionPercentages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card key={poll.id}>
      <div className='rounded-xl border-white light:bg-gray-100 border-t-0  w-full h-full flex flex-col gap-3 justify-between  p-6'>
        <div className='font-semibold md:text-xl text-md mb-4'>
          {poll.title}
        </div>

        <div className='flex flex-col gap-3 min-w-min'>
          <RadioGroup className='pl-4'>
            <div className='flex  flex-col gap-3  min-w-min'>
              {poll?.options.map((option) => (
                <div key={option.id} className='flex flex-col'>
                  <div className='inline-flex grid-flow-col items-center gap-4'>
                    <div className='pt-2 w-10'>
                      {option.totalVotes === 0 ? (
                        <div className='font-semibold flex items-center justify-center'>
                          0%
                        </div>
                      ) : (
                        <div className='font-semibold flex items-center justify-center'>
                          {Math.floor((option.votes / option.totalVotes) * 100)}
                          %
                        </div>
                      )}
                    </div>
                    <div className='flex gap-2'>
                      <Label
                        htmlFor={`option-${option.id}`}
                        className='text-md md:text-lg font-medium text-gray-900 dark:text-gray-400 max-w-fit'
                      >
                        {option.title}
                      </Label>
                      <div className='flex items-center'>
                        (
                        {option.votes === 1
                          ? `1 vote`
                          : `${option.votes} votes`}
                        )
                      </div>
                    </div>
                  </div>
                  <div className='w-11/12'>
                    <PollVoteBar
                      hasVoted={true}
                      percentage={
                        optionPercentage.find((i) => i.optionid === option.id)
                          ?.percentage as number
                      }
                      classname='dark:bg-white bg-black'
                    />
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2 my-2 items-center justify-center'>
            <div className='text-[#5F6061] dark:text-gray-400 flex items-center justify-center whitespace-nowrap'>
              {poll?.PolltotalVotes} votes
            </div>
            <div className='flex items-center justify-center'>
              <div className='size-1 bg-[#5F6061] dark:bg-gray-400 rounded-lg'></div>
            </div>
            <div className='text-[#5F6061] dark:text-gray-400 flex items-center justify-center whitespace-nowrap'>
              {isOpen ? timeLeftString : "Closed"}
            </div>
          </div>
          <div className='flex justify-center gap-2'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <CopyClipboard pollId={poll.id} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy Poll's Link</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <OpenPoll pollId={poll.id} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open Poll</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <DeletePoll pollId={poll.id} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete Poll</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <ResetPoll pollId={poll.id} reset={resetHandler} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset Poll's data</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Poll;
