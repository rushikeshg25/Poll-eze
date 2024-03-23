import React from "react";
import { Wrapper } from "./PollDataWrapper";

const PollVotes = ({ totalVotes }: { totalVotes: number }) => {
  return <Wrapper>{totalVotes} Votes</Wrapper>;
};

export default PollVotes;
