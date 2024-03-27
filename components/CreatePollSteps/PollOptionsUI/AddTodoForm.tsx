import React, { useRef, useState } from "react";
import { useStore } from "@/zustand/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AddTodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { options, addOption, removeOption } = useStore();
  const [todo, setTodo] = useState("");
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (todo.length) {
      addOption(todo);
      setTodo("");
    }
    e.target.reset();
  };
  return (
    <div className='w-full'>
      <form onSubmit={submitHandler} className='w-full'>
        <div className='relative flex flex-row w-full'>
          <Input
            ref={inputRef}
            placeholder='Enter your Option here'
            className='absolute inset-0'
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <Button
            className='absolute right-0   rounded-l-none'
            type='submit'
            disabled={todo.length === 0}
            onClick={() => {
              inputRef?.current?.focus();
            }}
          >
            <Plus />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
