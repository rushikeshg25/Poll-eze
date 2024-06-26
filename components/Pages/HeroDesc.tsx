"use client";
import React from "react";
import UiImprovements from "../ui/UiImprovements";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const HeroDesc = ({ userId }: { userId: string | null | undefined }) => {
  const router = useRouter();
  const startHandler = () => {
    if (!userId) {
      router.push("/sign-up");
    } else {
      router.push("/all-polls");
    }
  };
  return (
    <>
      <div className='absolute inset-y-0 hidden w-full lg:right-0 lg:block lg:w-1/2'>
        <span className='absolute -left-6 top-24 hidden h-24 w-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 opacity-60 blur-xl md:left-4 lg:top-28 lg:block lg:opacity-95'></span>
        <span className='absolute bottom-12 right-4 h-24 w-24 rounded-3xl bg-blue-600 opacity-80 blur-xl'></span>
      </div>
      <span className='absolute -top-5 aspect-square w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full bg-gradient-to-tr from-blue-600 to-green-400 opacity-40 blur-2xl lg:left-0 lg:w-2/12'></span>
      <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8'>
        <div className='w-full flex justify-center'>
          <div className='p-2' onClick={() => router.push("/announcements")}>
            <UiImprovements />
          </div>
        </div>

        <h1 className='text-3xl sm:text-center lg:text-left font-bold leading-tight dark:text-gray-400 text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl'>
          Voice your opinion, Create your{" "}
          <span className='bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 bg-clip-text text-transparent'>
            Poll
          </span>
        </h1>
        <p className='text-justify mt-6 text-gray-700 dark:text-gray-500'>
          A super tool for on-the-spot feedback, online polls let you check in
          with your audience or customers at any time. When you do, you send the
          message that you know they’re there and their opinions matter. And
          with instant access to poll results, you can get understanding of the
          people you’re trying to reach and take action based on their opinions.
        </p>

        <div className='p-9  flex w-full flex-col gap-5 sm:flex-row justify-center items-center'>
          <Button
            onClick={startHandler}
            className='relative flex h-12 w-max min-w-max items-center justify-center overflow-hidden rounded-full border border-transparent bg-blue-600 px-6 text-white outline-none duration-300 ease-linear after:absolute after:inset-x-0 after:left-0 after:top-0 after:aspect-square after:origin-center after:scale-0 after:rounded-full after:bg-[#172554] after:opacity-70 after:duration-300 after:ease-linear hover:border-[#172554] hover:after:scale-[2.5] hover:after:opacity-100 sm:w-max'
          >
            {userId ? (
              <span className='relative z-[5] hidden sm:flex'>
                {" "}
                Your Polls{" "}
              </span>
            ) : (
              <span className='relative z-[5] hidden sm:flex'>
                {" "}
                Get Started{" "}
              </span>
            )}
            <span className='relative z-[5] flex sm:hidden items-center justify-center'>
              Get Started
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroDesc;
