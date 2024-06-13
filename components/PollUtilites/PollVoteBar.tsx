/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Progress } from "@/components/ui/progress";
import clsx from "clsx";

type PollOptionBarProps = {
  hasVoted: boolean;
  percentage: number;
  classname?: string;
};

const PollVoteBar = ({
  percentage,
  classname,
  hasVoted,
}: PollOptionBarProps) => {
  return (
    <div className='w-full flex items-center justify-between'>
      <div
        className={
          clsx(
            "ml-14 rounded-full w-10/12 dark:bg-slate-400 bg-gray-100 border dark:border-white border-slate-950",
            {
              invisible: !hasVoted,
            }
          ) as unknown as string
        }
      >
        <Progress value={percentage} />
      </div>
    </div>
  );
};

export default PollVoteBar;
