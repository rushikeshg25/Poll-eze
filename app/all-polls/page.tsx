import { auth } from "@clerk/nextjs";
import MainNavbar from "@/components/Navbar/MainNavbar";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import Polls from "@/components/Data/Polls";
import type { Poll } from "@prisma/client";
import NoPolls from "@/components/Data/NoPolls";
type pollsT = { polls: Poll[] };

async function fetchPolls(userId: string) {
  console.log(userId);
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

const page = async () => {
  const { userId } = auth();
  console.log(userId);
  if (!userId) {
    redirect("/sign-in");
  }

  // const polls = (await fetchPolls(userId)) as Poll[];
  const polls = [] as Poll[];

  return (
    <div>
      <MainNavbar isLanding={false} isAuthenticated={`userId`} />
      {polls.length === 0 ? (
        <div className='py-32 w-full flex justify-center items-center'>
          <NoPolls />
        </div>
      ) : (
        <>
          <div className='flex justify-center text-2xl pt-4'>Your Polls</div>
          <Polls polls={polls} />
        </>
      )}
    </div>
  );
};

export default page;
