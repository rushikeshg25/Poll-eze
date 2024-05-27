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
  console.log(optionVoted);
  return (
    <div className='flex flex-col w-full h-screen'>
      <MainNavbar
        isAllPollsPage={false}
        isLanding={false}
        isAuthenticated={`${userId}`}
      />
      <div className='flex flex-col  items-center justify-center  flex-1 w-full  h-full '>
        <div className='min-w-[33.3%] -mt-6'>
          <AuthPoll poll={poll} optionVoted={optionVoted} userId={userId} />
        </div>
      </div>
    </div>
  );
}
