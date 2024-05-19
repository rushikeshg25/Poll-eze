import type { PollT } from "@/types/PollData";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../ui/label";
import { useState } from "react";
import timeUntil from "@/lib/timeuntil";

const Finalize = ({ poll }: { poll: PollT }) => {
  const { isOpen, timeLeftString } = timeUntil(
    new Date(),
    poll.Duration as number
  );
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  return (
    <div className=' rounded-xl border-[#E2E8F0] dark:border-[#27272A]  border-2 p-7 min-w-80'>
      <div className='rounded-xl  light:bg-gray-100 border-t-0  w-full  flex flex-col gap-3 justify-center  pb-6'>
        <div className='font-semibold md:text-xl text-md'>{poll.title}</div>
        <div className='md-text-lg text-sm'>{poll.description}</div>
      </div>
      <div className='flex flex-col gap-3 min-w-min'>
        <RadioGroup className='pl-4'>
          <div className='flex  flex-col gap-3 px-5  min-w-min'>
            {poll?.Options.map((option) => (
              <div key={option.title} className='flex flex-col '>
                <div className='inline-flex grid-flow-col items-center gap-4'>
                  <RadioGroupItem
                    value={option.title}
                    id={`option-${option.title}`}
                  />

                  <Label
                    htmlFor={`option-${option.title}`}
                    className='text-md md:text-lg font-medium text-gray-900 dark:text-gray-300'
                  >
                    {option.title}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        </RadioGroup>
        <div className='flex gap-2 my-2 px-4'>
          <div className='text-[#5F6061] dark:text-gray-400 flex items-center justify-center whitespace-nowrap'>
            {isOpen ? timeLeftString : "Poll Closed"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finalize;
