"use client";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "../ui/ThemeToggle";
import Link from "next/link";
import LangingPageLogo from "./Logos/LangingPageLogo";
// import { useState } from "react";
import { cn } from "@/lib/utils";
import MainLogo from "./Logos/MainLogo";
import { Button } from "../ui/button";

interface NavbarT {
  isLanding: boolean;
  isAuthenticated: string;
}

export default function MainNavbar({ isLanding, isAuthenticated }: NavbarT) {
  // const [MenuVisibility, setMenuVisibility] = useState(false);
  console.log(isLanding);

  return (
    <div>
      <header className='sticky inset-x-0  py-4  class="sticky top-0 z-50 w-full  supports-[backdrop-filter]:bg-background/60" border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"'>
        <div className='mx-auto w-full px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5'>
          <nav className='relative flex w-full justify-between gap-6'>
            <div className='relative inline-flex min-w-max'>
              <Link href='/' className='relative flex items-center gap-3'>
                <div>
                  <MainLogo />
                </div>
                <div className='inline-flex text-xl font-semibold text-gray-900 dark:text-gray-300'>
                  Poll-eze
                </div>
              </Link>
            </div>

            <div
              data-nav-overlay
              aria-hidden='true'
              className='fixed inset-0 hidden bg-gray-800/60 bg-opacity-50 backdrop-blur-xl backdrop-filter lg:!hidden'
            ></div>
            <div
              data-navbar
              className='invisible absolute top-full flex w-full translate-y-10 flex-col gap-x-4 gap-y-6 overflow-hidden  border-x border-x-gray-100 bg-white opacity-0 duration-300 ease-linear lg:visible lg:relative lg:top-0 lg:-translate-y-0 lg:scale-y-100 lg:flex-row lg:items-center lg:justify-end lg:border-x-0 lg:!bg-transparent lg:opacity-100'
            >
              <div className='flex w-full justify-items-end gap-2 items-center border-b border-gray-100 px-6 pb-6 sm:w-max lg:min-w-max lg:border-0 lg:px-0 lg:pb-0'>
                {isAuthenticated && <Button>New Poll</Button>}

                {!isLanding && (
                  <div>
                    <ThemeToggle />
                  </div>
                )}

                {isAuthenticated !== null ? (
                  <div className='p-1'>
                    <UserButton />
                  </div>
                ) : (
                  <Link
                    href='/sign-up'
                    className='relative flex h-12 w-full items-center justify-center overflow-hidden rounded-full border border-transparent bg-blue-600 px-6 outline-none duration-300 ease-linear after:absolute after:inset-x-0 after:left-0 after:top-0 after:aspect-square after:origin-center after:scale-0 after:rounded-full after:bg-white after:opacity-70 after:duration-300 after:ease-linear hover:border-white hover:after:scale-[2.5] hover:after:opacity-100 sm:w-max'
                  >
                    <span className='relative z-10 text-white'>
                      {" "}
                      Get Started{" "}
                    </span>
                  </Link>
                )}
              </div>
            </div>

            {/* <div className='flex min-w-max items-center gap-x-3'>
              <button
                data-toggle-navbar
                data-is-open='false'
                className='relative flex h-auto w-7 flex-col outline-none lg:invisible lg:hidden'
                onClick={() => {
                  setMenuVisibility(true);
                  console.log("clicked");
                }}
              >
                <span
                  id='line-1'
                  className='h-0.5 w-6 rounded-full bg-gray-700 transition-all duration-300 ease-linear'
                ></span>
                <span
                  id='line-2'
                  className='rounded-ful mt-1 h-0.5 w-6 origin-center bg-gray-700 transition-all duration-300 ease-linear'
                ></span>
                <span
                  id='line-3'
                  className='rounded-ful mt-1 h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-linear'
                ></span>
                <span className='sr-only'>togglenav</span>
              </button>
            </div> */}
          </nav>
        </div>
      </header>
    </div>
  );
}
