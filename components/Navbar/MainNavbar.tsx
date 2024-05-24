"use client";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "../ui/ThemeToggle";
import Link from "next/link";
import MainLogo from "./Logos/MainLogo";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Menu } from "lucide-react";

interface NavbarT {
  isLanding: boolean;
  isAuthenticated: string | null;
  isAllPollsPage: boolean;
}

export default function MainNavbar({
  isLanding,
  isAuthenticated,
  isAllPollsPage,
}: NavbarT) {
  const router = useRouter();

  return (
    <header className=' inset-x-0  py-4  sticky top-0 z-50 w-full  supports-[backdrop-filter]:bg-background/60" border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"'>
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
              {isAuthenticated && isAllPollsPage && (
                <Button onClick={() => router.push("/new-poll")}>
                  New Poll
                </Button>
              )}

              {isAuthenticated && !isAllPollsPage && (
                <Button onClick={() => router.push("/all-polls")}>
                  My Polls
                </Button>
              )}

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
                <Button
                  onClick={() => {
                    router.push("/sign-in");
                  }}
                >
                  Login
                </Button>
              )}
            </div>
          </div>

          {/*Mobile Menu*/}
          <div className='flex lg:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='outline' className=' w-full h-full'>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Poll-eze</SheetTitle>
                </SheetHeader>

                <SheetClose asChild className='pt-10 h-full'>
                  <div className='flex flex-col items-center justify-center gap-y-2'>
                    {isAuthenticated !== null && (
                      <Button variant={"ghost"}>Create New Poll</Button>
                    )}
                    {isAuthenticated !== null && (
                      <Button variant={"ghost"}>My Polls</Button>
                    )}

                    {isAuthenticated !== null ? (
                      <Button variant={"ghost"}>
                        <SignOutButton />
                      </Button>
                    ) : (
                      <Button variant={"ghost"}>
                        <SignInButton />
                      </Button>
                    )}
                    <div className='flex-grow'></div>
                    <div className='flex items-center gap-2 mb-9'>
                      <Button variant='outline'>
                        <GitHubLogoIcon className='mr-2 w-5 h-5' />
                        Github
                      </Button>
                      <ThemeToggle />
                    </div>
                  </div>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
