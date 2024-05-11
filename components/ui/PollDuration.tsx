"use client";
import React, { useEffect, useState } from "react";
import useTimeUntil from "@/hooks/useTimeUntil";
import { Wrapper } from "./PollDataWrapper";

type PollDurationT = {
  createdAt: Date;
  PollDuration: number;
};

const PollDuration = ({ createdAt, PollDuration }: PollDurationT) => {
  const DateObj = new Date(createdAt);
  const { Difference, isOpen } = useTimeUntil(DateObj, PollDuration);

  if (!isOpen) {
    return (
      <Wrapper className='flex gap-1'>
        <div className='flex items-center'>
          <div className='rounded-full aspect-square h-2 bg-red-700' />
        </div>
        <div>Closed</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className='flex gap-1'>
      <div className='flex items-center'>
        <div className='rounded-full aspect-square h-2 bg-green-600' />
      </div>
      {Difference != 0 ? (
        <div>{`${Difference} hrs`}</div>
      ) : (
        <div>Closes soon</div>
      )}
    </Wrapper>
  );
};

export default PollDuration;
