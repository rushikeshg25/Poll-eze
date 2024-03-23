import React, { useState } from "react";
import useTimeUntil from "@/hooks/useTimeUntil";
import { Wrapper } from "./PollDataWrapper";

type PollDurationT = {
  createdAt: Date;
  PollDuration: number;
};

const PollDuration = ({ createdAt, PollDuration }: PollDurationT) => {
  const [time, setTime] = useState<number>();
  const { DifferenceinMinutes, isOpen } = useTimeUntil(createdAt, PollDuration);

  if (!isOpen) {
    return (
      <Wrapper className='flex'>
        <div>
          <div className=' aspect-square h-7 bg-red-700'>
            Rushikesh is the best
          </div>
        </div>
        <div></div>
      </Wrapper>
    );
  }
  return <Wrapper></Wrapper>;
};

export default PollDuration;
