"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const NoPolls = () => {
  const router = useRouter();
  return (
    <>
      <Card className='w-1/4 py-4 min-w-min max-w-sm'>
        <CardHeader className='flex items-center'>
          <CardTitle>No Polls Found!</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex justify-center w-full'>
            <Button
              onClick={() => {
                router.push("/new-poll");
              }}
            >
              Create my first Poll
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default NoPolls;
