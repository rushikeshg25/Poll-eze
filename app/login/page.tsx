"use client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginValidation,
  LoginValidationSchema,
} from "@/lib/validators/LoginValidator";

export default function Login() {
  const router = useRouter();
  const [googleSignUpLoading, setGoogleSignUpLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidationSchema>({
    resolver: zodResolver(LoginValidation),
  });

  const LogInWithGoogle = async () => {
    setGoogleSignUpLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setGoogleSignUpLoading(false);
    }
  };

  return (
    <>
      <Navbar newPollPage={false} isloggedIn={false} />
      <div className="flex items-center justify-center h-screen">
        <Card className="w-[350px]">
          <CardHeader className="flex items-center">
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid items-center w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input placeholder="Username" {...register("username")} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Password</Label>
                  <Input placeholder="Password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center pb-1.5 select-none">
            <Button className="w-full ">Login</Button>
          </CardFooter>
          <div className="flex justify-center py-2">
            <hr className="w-[90%] pb-2" />
            {/* <span>or</span>
          <hr className="w-3 pb-2" /> */}
          </div>
          <CardFooter className="flex justify-center pb-5">
            <Button className="flex w-full gap-2" onClick={LogInWithGoogle}>
              {googleSignUpLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <>
                  <Image
                    height="20"
                    width="20"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                  />
                  <span>Sign in with Google</span>
                </>
              )}
            </Button>
          </CardFooter>
          <CardFooter className="flex justify-center">
            or&nbsp;
            <span
              className="underline cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Create an Account
            </span>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </>
  );
}
