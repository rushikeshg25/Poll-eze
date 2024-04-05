import PollPage from "@/components/Pages/PollPage";
import MainNavbar from "@/components/Navbar/MainNavbar";
import { fetchPoll } from "@/lib/fetchPoll";
import type { PollwithOptionT } from "@/types/PollwithOptions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import usePrivateHasVoted from "@/hooks/usePrivateHasVoted";

export default async function Page({ params }: { params: { id: string } }) {
  const { userId } = auth();
  if (!userId) redirect(`/poll/public/${params.id}`);
  const poll = (await fetchPoll(params.id)) as PollwithOptionT;

  const vote = await usePrivateHasVoted({
    userId: userId,
    pollId: poll.id,
  });
  const hasVoted = vote.hasVoted as boolean;

  return (
    <div className='flex flex-col w-full h-full'>
      <MainNavbar
        isAllPollsPage={false}
        isLanding={false}
        isAuthenticated={`${userId}`}
      />
      <div className='flex flex-col justify-center items-center flex-1 w-full'>
        <div className='w-1/3'>
          <PollPage poll={poll} hasVotedParent={hasVoted} />
        </div>
      </div>
    </div>
  );
}
