import MainNavbar from "@/components/Navbar/MainNavbar";
import React from "react";
import { auth } from "@clerk/nextjs";
import Footer from "@/components/Footer";

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
      <Footer className='fixed bottom-0 w-full' />
    </div>
  );
};

export default Page;
