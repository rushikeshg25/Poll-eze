import { useState } from "react";
import { CardContent, CardHeader } from "./card";
import { Votebar } from "./VoteBar";

const options = ["Gulab Jamun", "Rasgulla", "Jalebi", "Barfi"];

const LandingPagePoll = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [optionVoted, setOptionVoted] = useState("");
  const voteHandler = (option: string) => {};
  return (
    <div>
      <CardHeader className='flex items-center text-2xl'>
        <>What's your favorite Indian sweet?</>
      </CardHeader>
      <CardContent className='flex items-center flex-col gap-3 lg:grid-cols-2 lg:grid min-w-min'>
        {options.map((option) => (
          <button disabled={hasVoted}>
            <Votebar
              className={`dark:border-gray-300 border-gray-800 border-2 cursor-pointer ${
                hasVoted && option === optionVoted ? "bg-green-500" : ""
              }`}
              key={option}
              option={option}
              value={
                hasVoted == true
                  ? ((option.votes + 1) / (option.totalVotes + 1)) * 100
                  : 0
              }
              onClick={() => {
                voteHandler(option);
              }}
            />
          </button>
        ))}
      </CardContent>
    </div>
  );
};

export default LandingPagePoll;
