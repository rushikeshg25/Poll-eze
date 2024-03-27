"use client";
import React, { useEffect } from "react";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useStore } from "@/zustand/store";
import AddTodoForm from "./PollOptionsUI/AddTodoForm";
import Option from "./PollOptionsUI/Option";

type OptionT = {
  title: string;
  votes: number;
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
    <CardContent className='w-full flex flex-col items-center'>
      <AddTodoForm />
      <Label className='text-lg'>Options:</Label>
      <CardContent>
        {options.map((option) => (
          <Option title={option.title} />
        ))}
      </CardContent>
    </CardContent>
  );
};

export default PollOptions;
