import PollPage from "@/components/Pages/PollPage";
import MainNavbar from "@/components/Navbar/MainNavbar";
import { fetchPoll } from "@/lib/fetchPoll";
import type { PollwithOptionT } from "@/types/PollwithOptions";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const { userId } = useAuth();
  const router = useRouter();
  if (!userId) router.push(`/poll/public/${params.id}`);
  const poll = (await fetchPoll(params.id)) as PollwithOptionT;

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
