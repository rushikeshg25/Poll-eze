"use client";
import { Loader2 } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
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
import {
  SignupValidation,
  SignupValidationSchema,
} from "@/lib/validators/SignupValidator";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [googleSignUpLoading, setGoogleSignUpLoading] = useState(false);
  const { toast } = useToast();

  const SignInWithGoogle = async () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupValidationSchema>({
    resolver: zodResolver(SignupValidation),
  });

  const router = useRouter();

  const SubmitForm: SubmitHandler<SignupValidationSchema> = async (data) => {
    console.log("SubmitForm function called with data:", data);
    // ... your form submission logic
  };

  return (
    <>
      <Navbar newPollPage={false} isloggedIn={false} />
      <div className="flex items-center justify-center h-screen">
        <Card className="w-[350px]">
          <CardHeader className="flex items-center">
            <CardTitle>Signup</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(SubmitForm)}>
              <div className="grid items-center w-full gap-4 ">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username</Label>

                  <Input placeholder="Username" {...register("username")} />
                  {errors.username && (
                    <div className="mt-2 text-xs italic text-red-500">
                      {errors.confirmPassword?.message}
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Password</Label>

                  <Input
                    placeholder="Password"
                    {...register("password")}
                    type="password"
                  />
                  {errors.password && (
                    <div className="mt-2 text-xs italic text-red-500">
                      {errors.password?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Re-enter Password</Label>

                  <Input
                    placeholder="Password"
                    {...register("confirmPassword")}
                    type="password"
                  />
                  {errors.confirmPassword && (
                    <div className="mt-2 text-xs italic text-red-500">
                      {errors.confirmPassword?.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-8">
                <div className="flex justify-center w-full select-none">
                  <Button
                    className="w-full"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <div>Signup</div>
                    )}
                  </Button>
                </div>
                <div className="flex justify-center py-2">
                  <hr className="w-[90%]" />
                </div>
                <div className="flex justify-center pb-5">
                  <Button
                    className="flex w-full gap-2"
                    onClick={SignInWithGoogle}
                  >
                    <Image
                      height="20"
                      width="20"
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      loading="lazy"
                      alt="google logo"
                    />
                    <div className="flex items-center">Sign in with Google</div>
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>

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
