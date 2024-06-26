import { auth } from "@clerk/nextjs";
import MainNavbar from "@/components/Navbar/MainNavbar";
import { redirect } from "next/navigation";
import Polls from "@/components/Pages/Polls";
import NoPolls from "@/components/Pages/NoPolls";
import { getPolls } from "@/actions/GetPoll";
import Pagination from "@/components/PollUtilites/Pagination";
import Search from "@/components/PollUtilites/Search";
import { Suspense } from "react";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    limit?: string;
  };
}) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const search = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 6;
  const offset = (currentPage - 1) * limit;
  const { polls, totalPages } = await getPolls({
    offset,
    limit,
    search,
    userId,
  });

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
        <div className='pb-10'>
          <div className='flex justify-evenly items-center text-3xl p-5 font-semibold sm:p-5 '>
            <div>Your Polls</div>{" "}
            <div className='flex gap-3'>
              <Search />
              <Pagination totalPages={totalPages} />
            </div>
          </div>
          <Suspense key={search + currentPage}>
            <Polls polls={polls} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Page;
