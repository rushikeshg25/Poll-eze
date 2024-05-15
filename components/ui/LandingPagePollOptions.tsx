"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
    <RadioGroup>
      <div className='flex items-center flex-col gap-3 lg:grid-cols-2 lg:grid min-w-min'>
        {poll?.options.map((option) => (
          <div key={option.id}>
            <div className='flex items-center space-x-4'>
              <RadioGroupItem value='option-one' id='option-one' />
              <Label
                htmlFor='option-one'
                className='text-lg font-medium text-gray-900'
              >
                {option.title}
              </Label>
            </div>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
};

export default LandingPagePollOptions;
