import { PollwithOptionT } from "@/types/PollwithOptions";

import Poll from "../ui/Poll";
import Link from "next/link";

type PollT = { polls: PollwithOptionT[] };

const Polls = ({ polls }: PollT) => {
  return (
    <div className='flex  justify-center lg:px-28'>
      {polls.length === 0 ? (
        <div className='flex items-center justify-center gap-y-2 text-center pt-10  text-md'>
          No polls Created. &nbsp;
          <Link href='/new-poll' className='underline-offset-1 underline'>
            Create your first poll
          </Link>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 sm:px-10 px-8 lg:grid-cols-3 gap-2  md:gap-4'>
          {polls.map((poll) => (
            <Poll poll={poll} key={poll.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Polls;
