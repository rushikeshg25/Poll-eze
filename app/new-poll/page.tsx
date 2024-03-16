"use client";

import MainNavbar from "@/components/Navbar/MainNavbar";
import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Progress } from "@/components/ui/progress";

const page = () => {
  const { userId } = useAuth();
  const [cur, setCur] = useState(0);

  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <div className='h-screen flex  flex-col'>
      <MainNavbar
        isAllPollsPage={false}
        isAuthenticated={`${userId}`}
        isLanding={false}
      />
      <div className='flex-1 w-screen '>
        <div className=' flex justify-center min-w-min px-16'>
          <Progress value={cur} className='max-w-80' />
          <button onClick={() => setCur((cur) => cur + 33)}>Click</button>
        </div>
      </div>
    </div>
  );
};

export default page;
