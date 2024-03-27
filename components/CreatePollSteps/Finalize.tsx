import React from "react";
import { Card, CardDescription, CardFooter, CardHeader } from "../ui/card";
import type { PollT } from "@/types/PollData";
import { Votebar } from "../ui/VoteBar";

const Finalize = ({ poll }: { poll: PollT }) => {
  return (
    <Card className='min-w-min'>
      <CardHeader>{poll.title}</CardHeader>
      {poll.description && (
        <CardDescription>{poll.description}</CardDescription>
      )}
      <CardFooter className='flex flex-col gap-2'>
        {poll.Options.map((option) => (
          <Votebar
            key={option.title}
            option={option.title}
            className='w-full'
          />
        ))}
      </CardFooter>
    </Card>
  );
};

export default Finalize;
