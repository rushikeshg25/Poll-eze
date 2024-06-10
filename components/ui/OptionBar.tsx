/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Option } from "@prisma/client";
import clsx from "clsx";
import { useEffect, useState } from "react";

type OptionBarProps = {
  hasVoted: boolean;
  option: Option;
  selected: string | undefined;
  classname?: string;
};

const OptionBar = ({
  hasVoted,
  option,
  selected,
  classname,
}: OptionBarProps) => {
  const [width, setWidth] = useState((option.votes / option.totalVotes) * 100);
  const [voted, setVoted] = useState(false);
  useEffect(() => {
    setVoted(true);
  }, [hasVoted]);
  useEffect(() => {
    let newWidth = (option.votes / option.totalVotes) * 100;
    // if (selected === option.id && hasVoted) {
    //   newWidth = ((option.votes + 1) / option.totalVotes) * 100;
    // }
    setWidth(newWidth);
  }, [hasVoted, selected, voted]);

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
        <div
          className={clsx(" bg-[#199669] h-2.5 rounded-full", classname, {
            invisible: !hasVoted,
          })}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default OptionBar;
