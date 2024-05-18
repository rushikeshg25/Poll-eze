import MainNavbar from "@/components/Navbar/MainNavbar";
import { fetchPoll } from "@/lib/fetchPoll";
import type { PollwithOptionT } from "@/types/PollwithOptions";
import PublicPoll from "@/components/Pages/PublicPoll";

export default async function Page({ params }: { params: { id: string } }) {
  const poll = (await fetchPoll(params.id)) as PollwithOptionT;

  return (
    <div className='flex flex-col w-full h-full'>
      <MainNavbar
        isAllPollsPage={false}
        isLanding={false}
        isAuthenticated={null}
      />
      <div className='flex flex-col  items-center mt-32 flex-1 w-full  h-full '>
        <div className='min-w-[33.3%]'>
          <PublicPoll poll={poll} />
        </div>
      </div>
    </div>
  );
}
