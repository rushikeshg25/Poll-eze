import PollPage from "@/components/Pages/PollPage";
import MainNavbar from "@/components/Navbar/MainNavbar";
import { fetchPoll } from "@/lib/fetchPoll";
import { auth } from "@clerk/nextjs";
import DeletePoll from "@/components/PollEdit/DeletePoll";
import type { PollwithOptionT } from "@/types/PollwithOptions";
import { fetchUserId } from "@/lib/fetchUserId";

export default async function Page({ params }: { params: { id: string } }) {
  const poll = (await fetchPoll(params.id)) as PollwithOptionT;
  const { userId } = auth();
  const User = await fetchUserId(userId as string);

  return (
    <div className='flex flex-col w-full h-full'>
      <MainNavbar
        isAllPollsPage={false}
        isLanding={false}
        isAuthenticated={`${userId}`}
      />
      <div className='flex flex-col justify-center items-center flex-1 w-full'>
        {User?.id === poll.UserId && <DeletePoll pollId={params.id} />}
        <div className='w-1/3'>
          <PollPage poll={poll} />
        </div>
      </div>
    </div>
  );
}
