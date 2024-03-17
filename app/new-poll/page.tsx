"use client";

import MainNavbar from "@/components/Navbar/MainNavbar";
import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import PollData from "@/components/CreatePollSteps/PollData";
import PollOptions from "@/components/CreatePollSteps/PollOptions";
import PollDuration from "@/components/CreatePollSteps/PollDuration";
import Finalize from "@/components/CreatePollSteps/Finalize";
import Finish from "@/components/CreatePollSteps/Finish";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const STEPS = [
  {
    name: "Poll Data",
    step: 0,
    progress: 0,
    component: <PollData />,
  },
  {
    name: "Poll Options",
    step: 1,
    progress: 25,
    component: <PollOptions />,
  },
  {
    name: "Poll Duration",
    step: 2,
    progress: 50,
    component: <PollDuration />,
  },
  {
    name: "Finalize",
    step: 3,
    progress: 75,
    component: <Finalize />,
  },
  {
    name: "Finish",
    step: 4,
    progress: 100,
    component: <Finish />,
  },
];

const page = () => {
  const { userId } = useAuth();
  const [currentStep, setCurrentStep] = useState<number>(0);
  if (!userId) {
    redirect("/sign-in");
  }

  const onPrevious = () => {
    setCurrentStep((value) => value - 1);
  };

  const onNext = () => {
    setCurrentStep((value) => value + 1);
  };

  return (
    <div className='h-screen flex  flex-col'>
      <MainNavbar
        isAllPollsPage={false}
        isAuthenticated={`${userId}`}
        isLanding={false}
      />
      <div className='flex-1 w-screen '>
        <div className=' flex justify-center min-w-min px-16 flex-col'>
          <div className='flex flex-col items-center'>
            <div className='min-w-min'>{STEPS[currentStep].name}</div>
            <Progress
              value={STEPS[currentStep].progress}
              className='max-w-80'
            />
          </div>
          <div className='flex justify-center'>
            {STEPS[currentStep].component}
          </div>
          <div className='flex justify-center'>
            {currentStep === 0 ? null : (
              <Button onClick={onPrevious}>Previous</Button>
            )}
            {currentStep === 3 ? (
              <Button>Finish</Button>
            ) : (
              <Button onClick={onNext}>Next</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
