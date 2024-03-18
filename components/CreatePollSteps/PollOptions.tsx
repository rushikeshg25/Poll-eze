import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStore } from "@/zustand/store";
import AddTodoForm from "./PollOptionsUI/AddTodoForm";
import Option from "./PollOptionsUI/Option";

const PollOptions = () => {
  const { options, addOption, removeOption } = useStore();
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
