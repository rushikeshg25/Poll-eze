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
      <div
        className={clsx("ml-14 bg-[#199669] h-2.5 rounded-full", classname, {
          invisible: !hasVoted,
        })}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default OptionBar;
