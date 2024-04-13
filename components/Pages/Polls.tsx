"use client";

import React, { Suspense, useEffect, useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PollwithOptionT } from "@/types/PollwithOptions";
import PollLoadingSkeleton from "../ui/PollLoadingSkeleton";

type PollT = { polls: PollwithOptionT[] };

const Polls = ({ polls }: PollT) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <div className='max-w-5xl mx-auto px-8'>
        {loading ? (
          <PollLoadingSkeleton NumofPolls={polls.length} />
        ) : (
          <HoverEffect polls={polls} />
        )}
      </div>
    </div>
  );
};

export default Polls;
