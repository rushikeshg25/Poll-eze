import PollPage from "@/components/Pages/PollPage";
import MainNavbar from "@/components/Navbar/MainNavbar";
import { fetchPoll } from "@/lib/fetchPoll";
import { auth } from "@clerk/nextjs";
import type { Poll } from "@prisma/client";
import type { PollwithOptionT } from "@/types/PollwithOptions";

export default async function Page({ params }: { params: { id: string } }) {
  const poll = (await fetchPoll(
    "23bced17-9d41-41c8-afd6-eddf7482ad17"
  )) as PollwithOptionT;
  const { userId } = auth();
  return (
    <div className='flex flex-col w-full h-full'>
      <MainNavbar
        isAllPollsPage={false}
        isLanding={false}
        isAuthenticated={`${userId}`}
      />
      <div className='flex flex-col justify-center items-center flex-1 w-full'>
        <div className='w-1/3'>
          <PollPage poll={poll} />
        </div>
      </div>
    </div>
  );
}
