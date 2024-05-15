import LandingPagePollOptions from "./LandingPagePollOptions";
import { Votebar } from "./VoteBar";
import { prisma } from "@/lib/db";

const POLL_ID = "d512919f-867a-4d5e-949e-e2353c98c8a1";

const LandingPagePoll = async () => {
  const poll = await prisma.poll.findUnique({
    where: {
      id: POLL_ID,
    },
    include: {
      options: true,
    },
  });
  console.log(poll);
  return (
    <div className='w-full mx-auto my-10'>
      <div className='w-full h-11 rounded-lg dark:bg-gray-900 bg-gray-200 flex justify-start items-center space-x-1.5 px-3'>
        <span className='w-3 h-3 rounded-full dark:border-red-400 bg-red-400 '></span>
        <span className='w-3 h-3 rounded-full dark:border-yellow-400 bg-yellow-400'></span>
        <span className='w-3 h-3 rounded-full dark:border-green-400 bg-green-400'></span>
        <div className='flex items-center justify-center flex-grow h-full'>
          <div className=' -ml-14 flex justify-center items-center h-2/3 w-2/3 bg-gray-300  text-gray-500 rounded-sm  dark:bg-gray-700 dark:text-neutral-400'>
            Poll-eze
          </div>
        </div>
      </div>
      <div className='dark:bg-gray-700 bg-gray-100 border-t-0 w-full h-5/6 flex flex-col justify-normal  p-5'>
        <div className='font-semibold md:text-xl text-md'>
          Which came first: the chicken or the egg?
        </div>
        <LandingPagePollOptions poll={poll} />
      </div>
    </div>
  );
};

export default LandingPagePoll;

{
  /* <CardHeader className='flex items-center text-2xl'>
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
</CardContent> */
}
