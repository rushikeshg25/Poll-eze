import MainNavbar from "@/components/Navbar/MainNavbar";
import React from "react";
import { auth } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import Link from "next/link";

const POINTS = [
  "Moving to NextAuth",
  "Integrating Websockets and rabbitmq/Redis Message Queues for instant Poll Vote changes and Poll close on Dashboard",
  "Beautifying the UI",
];

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
      <div className='flex-1 items-center justify-center '>
        <div className='flex flex-col items-center justify-center gap-4 text-center p-10'>
          <h1 className='text-4xl font-bold'>Future Goals</h1>
          <div className='bg-background text-foreground rounded-lg shadow-lg p-6'>
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <div className='bg-muted rounded-full p-2 flex-shrink-0'>
                  {/* <ShirtIcon className="w-6 h-6 text-muted-foreground" /> */}
                </div>
                <div>
                  <h3 className='text-lg font-medium'>Moving to NextAuth</h3>
                </div>
              </div>
              <div className='flex items-center gap-4  '>
                <div className='bg-muted rounded-full p-2 flex-shrink-0'>
                  {/* <HeadphonesIcon className="w-6 h-6 text-muted-foreground" /> */}
                </div>

                <div>
                  <h3 className='text-lg font-medium'>
                    Integrating Websockets
                  </h3>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='bg-muted rounded-full p-2 flex-shrink-0'>
                  {/* <CoffeeIcon className="w-6 h-6 text-muted-foreground" /> */}
                </div>
                <div>
                  <h3 className='text-lg font-medium'>
                    Rabbitmq/Redis for instant Poll Vote changes and Poll close
                    on Dashboard
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <Link href={"/"} className='underline underline-offset-3'>
            Back to Home Page
          </Link>
          <Footer className='fixed bottom-0 w-full' />
        </div>
      </div>
    </div>
  );
};

export default Page;
