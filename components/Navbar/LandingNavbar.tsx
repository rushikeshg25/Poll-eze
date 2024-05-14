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
  const router = useRouter();
  console.log(userId);
  useEffect(() => {
    console.log(userId);
    if (userId) setIsAuthenticated(true);
    console.log(isAuthenticated);
  }, []);

  return (
    <div>
      <header className='absolute inset-x-0 top-0 z-50 py-6'>
        <div className='mx-auto w-full px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5'>
          <nav className='relative flex w-full justify-between gap-6'>
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
              <div className='flex w-full justify-items-end gap-1 items-center border-b border-gray-100 px-6 pb-6 sm:w-max lg:min-w-max lg:border-0 lg:px-0 lg:pb-0'>
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
    </div>
  );
}
