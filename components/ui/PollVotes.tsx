import React from "react";

const PollVotes = ({ totalVotes }: { totalVotes: number }) => {
  return <div className='min-w-min'>Total Votes:{totalVotes}</div>;
};

export default PollVotes;
