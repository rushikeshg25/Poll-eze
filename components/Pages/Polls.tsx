import { PollwithOptionT } from "@/types/PollwithOptions";

import Poll from "../ui/Poll";

type PollT = { polls: PollwithOptionT[] };

const Polls = ({ polls }: PollT) => {
  return (
    <div className='flex  justify-center p-10'>
      <div className='grid grid-cols-1  lg:grid-cols-3 gap-2  md:gap-4'>
        {polls.map((poll) => (
          <Poll poll={poll} key={poll.id} />
        ))}
      </div>
    </div>
  );
};

export default Polls;
