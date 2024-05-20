import LandingPagePollOptions from "./LandingPagePollOptions";
import { prisma } from "@/lib/db";

const POLL_ID = "d512919f-867a-4d5e-949e-e2353c98c8a1";

const LandingPagePoll = async () => {
  const poll = await prisma.poll.findUnique({
    where: {
      title: "Which came first: the chicken or the egg?",
    },

    include: {
      options: {
        orderBy: {
          title: "asc",
        },
      },
    },
  });

  return (
    <div className='w-full rounded-xl'>
      <div className='w-full h-11 rounded-t-lg dark:bg-gray-900 bg-gray-200 flex justify-start items-center space-x-1.5 px-3'>
        <span className='w-3 h-3 rounded-full dark:border-red-400 bg-red-400 '></span>
        <span className='w-3 h-3 rounded-full dark:border-yellow-400 bg-yellow-400'></span>
        <span className='w-3 h-3 rounded-full dark:border-green-400 bg-green-400'></span>
        <div className='flex items-center justify-center flex-grow h-full'>
          <div className=' -ml-14 flex justify-center items-center h-2/3 w-2/3 bg-gray-300  text-gray-500 rounded-sm  dark:bg-gray-700 dark:text-neutral-400'>
            Poll-eze
          </div>
        </div>
      </div>
      <div className='rounded-b-lg dark:bg-gray-700 bg-gray-100 border-t-0  w-full  flex flex-col gap-3 justify-center  p-5'>
        <div className='font-semibold md:text-xl text-md'>
          Which came first: the chicken or the egg?
        </div>
        <LandingPagePollOptions poll={poll} />
      </div>
    </div>
  );
};

export default LandingPagePoll;
