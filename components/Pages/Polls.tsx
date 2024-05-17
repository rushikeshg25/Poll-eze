"use client";
import { PollwithOptionT } from "@/types/PollwithOptions";
import PollLoadingSkeleton from "../ui/PollLoadingSkeleton";
import Poll from "../ui/Poll";

type PollT = { polls: PollwithOptionT[] };

const Polls = ({ polls }: PollT) => {
  // const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);

  return (
    <div className='flex items-center justify-center h-full'>
      {/* <div className='max-w-5xl mx-auto px-8'> */}
      {/* {loading ? (
          <PollLoadingSkeleton NumofPolls={polls.length} /> */}

      {/* <HoverEffect polls={polls} /> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  md:gap-4'>
        {polls.map((poll) => (
          <Poll poll={poll} key={poll.id} />
        ))}
      </div>
    </div>
  );
};

export default Polls;
