/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Option } from "@prisma/client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { optionVotes } from "@/actions/OptionVotes";

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
  const { data: Option } = useQuery({
    queryFn: async () => {
      const optionData = await optionVotes(option.id);
      return optionData;
    },
    queryKey: [option.id],
    refetchOnMount: true,
  });
  useEffect(() => {
    console.log(option);
  }, []);
  const [width, setWidth] = useState<number>(() => {
    if (option.totalVotes === 0) return 0;
    else {
      let newWidth = (option.votes / option.totalVotes) * 100;

      return newWidth;
    }
  });
  const [voted, setVoted] = useState(false);
  useEffect(() => {
    setVoted(true);
  }, [hasVoted]);
  useEffect(() => {
    if (option.totalVotes === 0) setWidth(0);
    else {
      let newWidth = (option.votes / option.totalVotes) * 100;

      setWidth(newWidth);
      // if (selected === option.id && hasVoted) {
      //   newWidth = ((option.votes + 1) / option.totalVotes) * 100;
      // }
    }
  }, [hasVoted, selected, voted]);
  useEffect(() => {
    console.log(width);
  }, [width]);

  if (!Option) return null;
  // console.log(first)
  return (
    <div className='flex items-center justify-between w-full'>
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
          style={{
            width: `${width}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default OptionBar;
