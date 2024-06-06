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

  useEffect(() => {
    let newWidth = (option.votes / option.totalVotes) * 100;
    if (selected === option.id && hasVoted) {
      newWidth = ((option.votes + 1) / option.totalVotes) * 100;
    }
    setWidth(newWidth);
  }, [hasVoted, selected, option]);

  useEffect(() => {}, [hasVoted]);
  return (
    <div className='w-full flex items-center justify-between'>
      <div className='ml-14 rounded-full w-full dark:bg-slate-500 bg-gray-100 border-2 dark:border-white border-slate-950'>
        <div
          className={clsx(" bg-[#199669] h-2.5 rounded-full ", classname, {
            invisible: !hasVoted,
          })}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default OptionBar;
