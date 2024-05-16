"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";
import { useState } from "react";
import { PollwithOptionT } from "@/types/PollwithOptions";
import { Button } from "./button";
import AvatarStack from "./AvatarStack";
import OptionBar from "./OptionBar";

const LandingPagePollOptions = ({ poll }: { poll: PollwithOptionT | null }) => {
  const [hasVoted, setHasVoted] = useState(true);
  const [selectedValue, setSelectedValue] = useState<string>();

  const voteHandler = (option: PollwithOptionT) => {
    setHasVoted(true);
  };

  return (
    <div className='flex flex-col gap-3 min-w-min'>
      <RadioGroup
        value={selectedValue}
        onValueChange={setSelectedValue}
        className='pl-4'
      >
        <div className='flex  flex-col gap-3  min-w-min'>
          {poll?.options.map((option) => (
            <div key={option.id} className='flex flex-col'>
              <div className='inline-flex grid-flow-col items-center gap-4'>
                {hasVoted ? (
                  <div className='pt-2 w-10'>
                    {Math.floor((option.votes / option.totalVotes) * 100)}%
                    {/* 100% */}
                  </div>
                ) : (
                  <RadioGroupItem
                    value={option.id}
                    id={`option-${option.id}`}
                  />
                )}
                <Label
                  htmlFor={`option-${option.id}`}
                  className='text-lg font-medium text-gray-900'
                >
                  {option.title}
                </Label>
              </div>
              <OptionBar
                hasVoted={hasVoted}
                option={option}
                selected={selectedValue}
              />
            </div>
          ))}
        </div>
      </RadioGroup>
      <div className='flex gap-2 my-2'>
        <AvatarStack />
        <div className='text-[#5F6061] flex items-center justify-center whitespace-nowrap'>
          {poll?.PolltotalVotes} votes
        </div>
        <div className='flex items-center justify-center'>
          <div className='size-1 bg-[#5F6061] rounded-lg'></div>
        </div>
        <div className='text-[#5F6061] flex items-center justify-center whitespace-nowrap'>
          10 days left
        </div>
        <div className='flex-grow'></div>
        <Button
          className='bg-[#2563EB]'
          // onClick={voteHandler}
          disabled={hasVoted}
        >
          Vote
        </Button>
      </div>
    </div>
  );
};

export default LandingPagePollOptions;
