"use client";

import MainNavbar from "@/components/Navbar/MainNavbar";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import PollData from "@/components/CreatePollSteps/PollData";
import PollOptions from "@/components/CreatePollSteps/PollOptions";
import PollDuration from "@/components/CreatePollSteps/PollDuration";
import Finalize from "@/components/CreatePollSteps/Finalize";
import Finish from "@/components/CreatePollSteps/Finish";
import { Button } from "@/components/ui/button";
import type { PollT } from "@/types/PollData";

const page = () => {
  const { userId } = useAuth();

  if (!userId) {
    redirect("/sign-in");
  }
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [poll, setPoll] = useState<PollT>({
    UserId: "",
    description: "",
    title: "",
    PollType: "",
    Options: [],
  });
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (poll.title.length === 0) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [poll.title]);

  const descriptionhandler = (newDescription: string) => {
    setPoll({ ...poll, description: newDescription });
    console.log(poll);
  };

  const titlehandler = (newTitle: string) => {
    setPoll({ ...poll, title: newTitle });
    console.log(poll);
  };

  const STEPS = [
    {
      name: "Poll Data",
      step: 0,
      progress: 0,
      component: (
        <PollData
          titlehandler={titlehandler}
          descriptionhandler={descriptionhandler}
        />
      ),
    },
    {
      name: "Poll Options",
      step: 1,
      progress: 25,
      component: <PollOptions poll={poll} />,
    },
    {
      name: "Poll Duration",
      step: 2,
      progress: 50,
      component: <PollDuration poll={poll} />,
    },
    {
      name: "Finalize",
      step: 3,
      progress: 75,
      component: <Finalize poll={poll} />,
    },
    {
      name: "Finish",
      step: 4,
      progress: 100,
      component: <Finish poll={poll} />,
    },
  ];

  const onPrevious = () => {
    setCurrentStep((value) => value - 1);
  };

  const onNext = () => {
    if (currentStep === 0) {
    }
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
              <Button onClick={onNext} disabled={isNextDisabled}>
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
