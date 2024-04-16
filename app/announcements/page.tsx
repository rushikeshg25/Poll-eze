import MainNavbar from "@/components/Navbar/MainNavbar";
import React from "react";
import { auth } from "@clerk/nextjs";

const Page = () => {
  const { userId } = auth();
  return (
    <div className='h-screen flex flex-col'>
      <div>
        <MainNavbar
          isLanding={false}
          isAllPollsPage={false}
          isAuthenticated={userId}
        />
      </div>
      <div className='flex-1 items-center justify-center '></div>
    </div>
  );
};

export default Page;
