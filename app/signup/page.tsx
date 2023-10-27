"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Login() {
  const router = useRouter();
  return (
    <>
      <Navbar newPollPage={false} isloggedIn={false} />
      <div className="flex items-center justify-center h-screen">
        <Card className="w-[350px]">
          <CardHeader className="flex items-center">
            <CardTitle>Signup</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid items-center w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input id="name" placeholder="Username" />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Password</Label>
                  <Input id="name" placeholder="Password" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Re-enter Password</Label>
                  <Input id="name" placeholder="Password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center pb-1.5 select-none">
            <Button className="w-full ">Signup</Button>
          </CardFooter>
          <div className="flex justify-center py-2">
            <hr className="w-[90%] pb-2" />
            {/* <span>or</span>
          <hr className="w-3 pb-2" /> */}
          </div>
          <CardFooter className="flex justify-center pb-5">
            <Button className="flex w-full gap-2">
              <Image
                height="20"
                width="20"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Sign in with Google</span>
            </Button>
          </CardFooter>
          <CardFooter className="flex justify-center">
            Already have an Account?&nbsp;
            <span
              className="underline cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </>
  );
}
