import React, { useRef, useState } from "react";
import { useStore } from "@/zustand/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AddTodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addOption, options } = useStore();
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
        <div className='group flex flex-row w-full group:'>
          <Input
            disabled={options.length > 3}
            ref={inputRef}
            placeholder='Enter your Option here'
            className=' inset-0 flex-grow group-focus-within:border-2 outline-none group-focus-within:ring-2 group-focus-within:outline-none  group-focus-within:ring-ring group-focus-within:ring-offset-2  rounded-l-lg '
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <Button
            className=' group-focus-within:ring-2   h-full'
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
