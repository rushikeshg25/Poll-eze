"use client";
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { useStore } from "@/zustand/store";
import AddTodoForm from "./PollOptionsUI/AddTodoForm";
import Option from "./PollOptionsUI/Option";

type OptionT = {
  title: string;
  votes: number;
  totalVotes: number;
};

type PollOptionsT = {
  addOptions: (a: OptionT[]) => void;
};

const PollOptions = ({ addOptions }: PollOptionsT) => {
  const { options } = useStore();

  useEffect(() => {
    addOptions(options);
  }, [options]);

  return (
    <div className='w-full flex flex-col items-center gap-3'>
      <AddTodoForm />
      <div className='flex flex-col space-y-1.5 w-full'>
        <Label>Created Options</Label>
        <div className='border-2 border-[#27272A] rounded-lg  w-full h-40 flex flex-col gap-3 overflow-y-auto'>
          {options.length === 0 ? (
            <div className='text-center flex items-center justify-center w-full h-full'>
              <p className='dark:text-[#A1A1AA]'>
                Added Options will appear here
              </p>
            </div>
          ) : (
            <div className='w-full flex flex-col  '>
              {options.map((option) => (
                <Option key={option.title} title={option.title} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PollOptions;
