/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PollwithOptionT } from "@/types/PollwithOptions";
import timeUntil from "@/lib/timeuntil";
import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";
import OptionBar from "../ui/OptionBar";
import { Button } from "../ui/button";

type PollT = {
  poll: PollwithOptionT;
  optionVoted: string | null;
  voteApiHandler: (optionId: string) => void;
};

const PollPage = ({ poll, optionVoted, voteApiHandler }: PollT) => {
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    optionVoted ?? undefined
  );
  const [optionPercentage, setOptionPercentage] = useState<
    { optionid: string; percentage: Number }[]
  >([]);

  const calculateOptionPercentages = (optionId: string | undefined) => {
    const newOptionPercentages = poll.options.map((option) => {
      if (option.id === optionId) {
        return {
          optionid: option.id,
          percentage: Math.floor(
            ((option.votes + 1) / (option.totalVotes + 1)) * 100
          ),
        };
      } else {
        return {
          optionid: option.id,
          percentage: Math.floor(
            (option.votes / (option.totalVotes + 1)) * 100
          ),
        };
      }
    });
    setOptionPercentage(newOptionPercentages);
  };

  const { toast } = useToast();
  const { isOpen, timeLeftString } = timeUntil(
    new Date(poll.created),
    poll.Duration as number
  );

  useEffect(() => {
    if (optionVoted) {
      setHasVoted(true);
      calculateOptionPercentages(optionVoted);
    }
  }, []);

  const voteHandler = async (optionId: string) => {
    try {
      calculateOptionPercentages(selectedValue as string);
      await voteApiHandler(selectedValue as string);
      setHasVoted(true);
      toast({
        title: `Voted for ${
          poll.options.find((option) => option.id === optionId)?.title
        }`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "We ran into some Issue",
      });
    }
  };

  return (
    <div className=' rounded-xl border-[#E2E8F0] dark:border-[#27272A]  border-2 p-6'>
      <div className='rounded-xl  light:bg-gray-100 border-t-0  w-full  flex flex-col gap-3 justify-center  p-6'>
        <div className='font-semibold md:text-xl text-md'>{poll.title}</div>
        <div className='md-text-lg text-sm'>{poll.description}</div>
      </div>
      <div className='flex flex-col gap-3 min-w-min'>
        <RadioGroup
          value={selectedValue}
          onValueChange={setSelectedValue}
          className='pl-4'
        >
          <div className='flex  flex-col gap-3 px-5  min-w-min'>
            {poll?.options.map((option) => (
              <div key={option.id} className='flex flex-col '>
                <div className='inline-flex grid-flow-col items-center gap-4'>
                  {hasVoted ? (
                    <div className='pt-2 w-10 font-semibold'>
                      {optionPercentage.map(
                        (i) =>
                          i.optionid === option.id && (
                            <div
                              key={i.optionid}
                              className='flex items-center '
                            >
                              {String(i.percentage)}%
                            </div>
                          )
                      )}
                    </div>
                  ) : (
                    <RadioGroupItem
                      value={option.id}
                      id={`option-${option.id}`}
                    />
                  )}
                  <Label
                    htmlFor={`option-${option.id}`}
                    className='text-md md:text-lg font-medium text-gray-900 dark:text-gray-300'
                  >
                    {option.title}
                  </Label>
                  {selectedValue === option.id && hasVoted && (
                    <div className='flex items-center justify-center border-2 border-gray-900 dark:border-gray-300 rounded-full  size-5'>
                      <Check />
                    </div>
                  )}
                </div>
                <OptionBar
                  hasVoted={hasVoted}
                  option={option}
                  selected={selectedValue}
                  classname='bg-black dark:bg-white'
                />
              </div>
            ))}
          </div>
        </RadioGroup>
        <div className='flex gap-2 my-2 px-4'>
          <div className='text-[#5F6061] dark:text-gray-400 flex items-center justify-center whitespace-nowrap'>
            {isOpen ? timeLeftString : "Poll Closed"}
          </div>
          <div className='flex-grow'></div>
          <Button
            className='hover:disabled:cursor-not-allowed '
            variant={"default"}
            onClick={() => voteHandler(selectedValue as string)}
            disabled={
              selectedValue === undefined || hasVoted === true || !isOpen
            }
          >
            {isOpen ? hasVoted ? <>Voted </> : <>Vote</> : <>Closed</>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PollPage;
