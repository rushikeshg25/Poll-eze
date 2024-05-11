import { auth } from "@clerk/nextjs";
import MainNavbar from "@/components/Navbar/MainNavbar";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import Polls from "@/components/Pages/Polls";
import { PollwithOptionT } from "@/types/PollwithOptions";
import NoPolls from "@/components/Pages/NoPolls";
import { revalidatePath } from "next/cache";

async function fetchPolls(userId: string) {
  try {
    const pollsData = await prisma.user.findUnique({
      where: {
        externalId: userId,
      },
      select: {
        polls: {
          include: {
            options: true,
          },
        },
      },
    });
    const polls = pollsData?.polls;
    return polls;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

const Page = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const polls = (await fetchPolls(userId)) as PollwithOptionT[];

  return (
    <div className='h-screen flex flex-col'>
      <MainNavbar
        isAllPollsPage={true}
        isLanding={false}
        isAuthenticated={`${userId}`}
      />
      {!polls ? (
        <div className='flex-1 w-full flex justify-center items-center'>
          <NoPolls />
        </div>
      ) : (
        <>
          <div className='flex justify-center text-3xl pt-4 font-semibold'>
            Your Polls
          </div>
          <Polls polls={polls} />
        </>
      )}
    </div>
  );
};

export default Page;

revalidatePath("/all-polls");
