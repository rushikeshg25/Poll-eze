import React from "react";
import useTimeUntil from "@/hooks/useTimeUntil";

type PollDurationT = {
  createdAt: string;
  PollDuration: number;
};

const PollDuration = ({ createdAt, PollDuration }: PollDurationT) => {
  const { DifferenceinMinutes, isOpen } = useTimeUntil(createdAt, PollDuration);

  return <div>PollDuration</div>;
};

export default PollDuration;
