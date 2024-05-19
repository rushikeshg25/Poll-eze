import { PollwithOptionT } from "@/types/PollwithOptions";

import Poll from "../ui/Poll";

type PollT = { polls: PollwithOptionT[] };

const Polls = ({ polls }: PollT) => {
  return (
    <div className='flex  justify-center lg:px-28'>
      <div className='grid grid-cols-1 md:grid-cols-2 sm:px-10 px-8 lg:grid-cols-3 gap-2  md:gap-4'>
        {polls.map((poll) => (
          <Poll poll={poll} key={poll.id} />
        ))}
      </div>
    </div>
  );
};

export default Polls;
