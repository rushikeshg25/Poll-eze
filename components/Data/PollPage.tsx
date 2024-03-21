"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Votebar } from "../ui/VoteBar";
import { PollwithOptionT } from "@/types/PollwithOptions";

type PollT = { poll: PollwithOptionT };

const PollPage = ({ poll }: PollT) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-center'>{poll.title}</CardTitle>
        {poll.description && (
          <CardDescription>{poll.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className='flex flex-col gap-3 lg:grid-cols-2 lg:grid'>
        {poll.options.map((option) => (
          <Votebar option={option.title} />
        ))}
      </CardContent>
    </Card>
  );
};

export default PollPage;
