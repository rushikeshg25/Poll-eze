import MainNavbar from "@/components/Navbar/MainNavbar";
import { fetchPoll } from "@/lib/fetchPoll";
import type { PollwithOptionT } from "@/types/PollwithOptions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import hasAuthUservoted from "@/lib/hasAuthUserVoted";
import AuthPoll from "@/components/Pages/AuthPoll";

export default async function Page({ params }: { params: { id: string } }) {
  const { userId } = auth();
  if (!userId) redirect(`/poll/public/${params.id}`);
  const poll = (await fetchPoll(params.id)) as PollwithOptionT;

  const optionVoted = await hasAuthUservoted({
    pollId: params.id,
    userId: userId,
  });
  return (
    <div className='flex flex-col w-full h-full'>
      <MainNavbar
        isAllPollsPage={false}
        isLanding={false}
        isAuthenticated={`${userId}`}
      />
      <div className='flex flex-col justify-center items-center flex-1 w-full'>
        <div className='w-1/3'>
          <AuthPoll poll={poll} optionVoted={optionVoted} userId={userId} />
        </div>
      </div>
    </div>
  );
}
