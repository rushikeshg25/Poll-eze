"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LangingPageLogo from "./Logos/LangingPageLogo";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { SignOutButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "../ui/ThemeToggle";

export default function LandingNavbar() {
  const { userId } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (userId) setIsAuthenticated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();

  return (
    <div>
      <header className='absolute inset-x-0 top-0 z-50 py-6'>
        <div className='w-full px-5 mx-auto sm:px-10 md:px-12 lg:max-w-7xl lg:px-5'>
          <nav className='relative flex justify-between w-full gap-6'>
            <div className='relative inline-flex min-w-max'>
              <Link href='/' className='relative flex items-center gap-3'>
                <div>
                  <LangingPageLogo />
                </div>
                <div className='inline-flex text-lg font-semibold text-gray-900 dark:text-gray-400'>
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
              <div className='flex items-center w-full gap-1 px-6 pb-6 border-b border-gray-100 justify-items-end sm:w-max lg:min-w-max lg:border-0 lg:px-0 lg:pb-0'>
                <div>
                  <ThemeToggle />
                </div>

                {isAuthenticated !== null ? (
                  <div className='p-1'>
                    <UserButton />
                  </div>
                ) : null}

                {!isAuthenticated && (
                  <Button
                    className='bg-[#2563EB]'
                    onClick={() => router.push("/signup")}
                  >
                    Signup
                  </Button>
                )}
              </div>
            </div>

            {/*Mobile Menu*/}

            <div className='flex lg:hidden'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='outline' className='w-full h-full '>
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Poll-eze</SheetTitle>
                  </SheetHeader>

                  <SheetClose asChild className='h-full pt-10'>
                    <div className='flex flex-col items-center justify-center gap-y-2'>
                      {isAuthenticated === true && (
                        <Button
                          variant={"ghost"}
                          onClick={() => router.push("/new-poll")}
                        >
                          Create New Poll
                        </Button>
                      )}
                      {isAuthenticated === true && (
                        <Button
                          variant={"ghost"}
                          onClick={() => router.push("/all-polls")}
                        >
                          My Polls
                        </Button>
                      )}

                      {isAuthenticated === true ? (
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
                        <Link href={"https://github.com/rushikeshg25/Poll-eze"}>
                          <Button variant='outline'>
                            <GitHubLogoIcon className='w-5 h-5 mr-2' />
                            Github
                          </Button>
                        </Link>
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
    </div>
  );
}
