"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { useAuth } from "@clerk/nextjs";

const Home = () => {
  const { userId } = useAuth();

  return (
    <>
      <Navbar isLanding={true} isAuthenticated={`userId`} />

      <section className='relative bg-white py-32 lg:py-36'>
        <div className='mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:flex-row lg:gap-12 lg:px-5'>
          <div className='absolute inset-y-0 hidden w-full lg:right-0 lg:block lg:w-1/2'>
            <span className='absolute -left-6 top-24 hidden h-24 w-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 opacity-60 blur-xl md:left-4 lg:top-28 lg:block lg:opacity-95'></span>
            <span className='absolute bottom-12 right-4 h-24 w-24 rounded-3xl bg-blue-600 opacity-80 blur-xl'></span>
          </div>
          <span className='absolute -top-5 aspect-square w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full bg-gradient-to-tr from-blue-600 to-green-400 opacity-40 blur-2xl lg:left-0 lg:w-2/12'></span>
          <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8'>
            <h1 className='text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl'>
              Voice your opinion, Create your{" "}
              <span className='bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 bg-clip-text text-transparent'>
                Poll
              </span>
            </h1>
            <p className='mt-8 text-gray-700'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              repellat perspiciatis aspernatur quis voluptatum porro incidunt,
              libero sequi quos eos velit
            </p>
            <div className='mx-auto mt-10 flex w-full max-w-md lg:mx-0'>
              <div className='flex w-full flex-col gap-5 sm:flex-row'>
                <form
                  action='#'
                  className='flex w-full items-center gap-3 rounded-full border border-gray-200 bg-gray-100 py-1 pl-6 pr-1 text-gray-600 shadow-lg shadow-gray-200/20 ease-linear focus-within:border-blue-600 focus-within:bg-white'
                >
                  <span className='min-w-max border-r border-gray-200 pr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z'
                      />
                    </svg>
                  </span>
                  <input
                    type='email'
                    name=''
                    id=''
                    placeholder='johndoe@gmail.com'
                    className='w-full bg-transparent py-3 outline-none'
                  />
                  <button className='relative flex h-12 w-max min-w-max items-center justify-center overflow-hidden rounded-full border border-transparent bg-blue-600 px-6 text-white outline-none duration-300 ease-linear after:absolute after:inset-x-0 after:left-0 after:top-0 after:aspect-square after:origin-center after:scale-0 after:rounded-full after:bg-[#172554] after:opacity-70 after:duration-300 after:ease-linear hover:border-[#172554] hover:after:scale-[2.5] hover:after:opacity-100 sm:w-max'>
                    <span className='relative z-[5] hidden sm:flex'>
                      {" "}
                      Get Started{" "}
                    </span>
                    <span className='relative z-[5] flex sm:hidden'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-5 w-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none'>
            <img
              src='https://agencex-astro.vercel.app/images/image1.webp'
              alt='Hero image'
              width='2350'
              height='2359'
              className='max-h-96 rounded-3xl object-cover lg:absolute lg:h-full lg:max-h-none lg:w-full'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
