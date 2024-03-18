import React, { useState } from "react";
import { useStore } from "@/zustand/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AddTodoForm = () => {
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
        <div className='flex flex-row w-full'>
          <Input
            placeholder='Enter your Option here'
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <Button type='submit' disabled={todo.length === 0}>
            <Plus />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
