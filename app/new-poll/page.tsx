"use client";

import MainNavbar from "@/components/Navbar/MainNavbar";
import { useWindowSize } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import PollData from "@/components/CreatePollSteps/PollData";
import PollDuration from "@/components/CreatePollSteps/PollDuration";
import Finalize from "@/components/CreatePollSteps/Finalize";
import Finish from "@/components/CreatePollSteps/Finish";
import { Button } from "@/components/ui/button";
import type { PollT } from "@/types/PollData";
import { Timer, List, CheckCircle } from "lucide-react";
import { useStore } from "@/zustand/store";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
type OptionT = {
  title: string;
  votes: number;
  totalVotes: number;
};

const Page = () => {
  const { userId } = useAuth();
  if (!userId) {
    redirect("/sign-in");
  }

  const { toast } = useToast();
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  const { options } = useStore();
  const size = useWindowSize();
  const width = size.width as number;
  const height = size.height as number;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [poll, setPoll] = useState<PollT>({
    UserId: "",
    description: "",
    title: "",
    PollType: "",
    Options: [],
    Duration: 1,
  });

  useEffect(() => {
    if (poll.title.length === 0 || options.length < 2) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [poll.title, options]);

  const descriptionhandler = (newDescription: string) => {
    setPoll({ ...poll, description: newDescription });
  };

  const titlehandler = (newTitle: string) => {
    setPoll({ ...poll, title: newTitle });
  };

  const durationhandler = (time: number) => {
    setPoll({ ...poll, Duration: time });
  };

  const addOptions = (options: OptionT[]) => {
    setPoll({ ...poll, Options: options });
  };

  const createPollHandler = async () => {
    setPoll({ ...poll, UserId: userId });
    try {
      await axios.post("http://localhost:3000/api/poll/create-poll", {
        poll: poll,
      });
      toast({
        title: "Poll Created",
      });
      setCurrentStep((value) => value + 1);
    } catch (error) {
      toast({
        title: "We ran into some Issue",
        description: JSON.stringify(error),
      });
    }
  };

  const STEPS = [
    {
      name: "Poll Data (1/3)",
      step: 0,
      progress: 0,
      component: (
        <PollData
          titlehandler={titlehandler}
          descriptionhandler={descriptionhandler}
          addOptions={addOptions}
        />
      ),
      icon: <List />,
    },

    {
      name: "Poll Duration (2/3)",
      step: 1,
      progress: 33,
      component: <PollDuration durationhandler={durationhandler} />,
      icon: <Timer />,
    },
    {
      name: "Preview (3/3)",
      step: 2,
      progress: 66,
      component: <Finalize poll={poll} />,
      icon: <CheckCircle />,
    },
    {
      name: "Finish",
      step: 3,
      progress: 100,
      component: <Finish />,
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
    <div className='h-screen flex flex-col gap-2'>
      <MainNavbar
        isAllPollsPage={false}
        isAuthenticated={`${userId}`}
        isLanding={false}
      />
      <div className='flex-1 w-screen '>
        <div className=' flex justify-center min-w-min px-16 flex-col gap-3'>
          <div className='flex flex-col items-center'>
            <div className='min-w-min flex flex-row gap-2 p-3'>
              <div>{STEPS[currentStep].icon}</div>
              <div>{STEPS[currentStep].name}</div>
            </div>
            <Progress
              value={STEPS[currentStep].progress}
              className='max-w-80'
            />
          </div>
          <div className='flex justify-center'>
            {STEPS[currentStep].component}
          </div>
          {currentStep === 3 ? null : (
            <div className='flex justify-center'>
              {currentStep === 0 || currentStep === 3 ? null : (
                <Button onClick={onPrevious}>Previous</Button>
              )}

              {currentStep === 2 ? (
                <Button onClick={createPollHandler}>Finish</Button>
              ) : (
                <Button onClick={onNext} disabled={isNextDisabled}>
                  Next
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
