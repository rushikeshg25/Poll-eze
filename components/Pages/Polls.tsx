"use client";

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PollwithOptionT } from "@/types/PollwithOptions";

type PollT = { polls: PollwithOptionT[] };

const Polls = ({ polls }: PollT) => {
  console.log(polls);
  return (
    <div>
      {" "}
      <div className='max-w-5xl mx-auto px-8'>
        <HoverEffect polls={polls} />
      </div>
    </div>
  );
};

export default Polls;
