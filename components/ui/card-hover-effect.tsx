import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PollwithOptionT } from "@/types/PollwithOptions";
import { CardFooter } from "./card";
import { Votebar } from "./VoteBar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PollVotes from "./PollVotes";
import PollDuration from "./PollDuration";
import DeletePoll from "../PollEdit/DeletePoll";
import CopyClipboard from "./CopyClipboard";
import OpenPoll from "./OpenPoll";

type PollT = { polls: PollwithOptionT[]; className?: string };

export const HoverEffect = ({ polls, className }: PollT) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {polls.map((poll, idx) => (
        <div
          key={poll.id}
          className='relative group  block p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{poll.title}</CardTitle>

            <CardFooter className='flex flex-col gap-2'>
              {poll.options.map((option) => (
                <div key={option.id} className='grid grid-rows-1  w-full gap-2'>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Votebar
                          key={option.id}
                          option={option.title}
                          value={(option.votes / option.totalVotes) * 100}
                          className='w-full'
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        {option.votes === 1 ? (
                          <p>{`${option.votes} vote`} </p>
                        ) : (
                          <p>{`${option.votes} votes`} </p>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </CardFooter>
            <CardFooter className='flex flex-col justify-center items-center'>
              <div className='flex items-center'>
                <PollVotes totalVotes={poll.PolltotalVotes} />
                <PollDuration
                  PollDuration={poll.Duration as number}
                  createdAt={poll.created}
                />
              </div>
              <div className='flex justify-between'>
                <OpenPoll pollId={poll.id} />
                <CopyClipboard pollId={poll.id} />
                <DeletePoll pollId={poll.id} />
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative ",
        className
      )}
    >
      <div className='relative z-50'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
