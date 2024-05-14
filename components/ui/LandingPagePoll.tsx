import { useState } from "react";
import { CardContent, CardHeader } from "./card";
import { Votebar } from "./VoteBar";
import { prisma } from "@/lib/db";
import Image from "next/image";

const LandingPagePoll = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [optionVoted, setOptionVoted] = useState("");
  const voteHandler = (option: string) => {};
  return (
    <div>
      {/* <CardHeader className='flex items-center text-2xl'>
        <>Which came first: the chicken or the egg?</>
      </CardHeader>
      <CardContent className='flex items-center flex-col gap-3 lg:grid-cols-2 lg:grid min-w-min'>
        {options.map((option) => (
          <button key={option} disabled={hasVoted}>
            <Votebar
              className={`dark:border-gray-300 border-gray-800 border-2 cursor-pointer min-w-52 ${
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
      </CardContent> */}
      <Image
        src='https://kitwind.io/assets/kometa/half-browser.png'
        className='w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md'
        alt='Poll-eze'
        height={300}
        width={300}
      />
    </div>
  );
};

export default LandingPagePoll;
