"use client";
import { Trash2 } from "lucide-react";
import { useStore } from "@/zustand/store";
const Option = ({ title }: { title: string }) => {
  const { removeOption } = useStore();
  return (
    <div className='w-full'>
      {
        <div className='flex flex-row  w-full items-center gap-3 border-b-1   dark:hover:bg-[#27272A] hover:bg-[#E2E8F0]'>
          <div className='flex-grow flex items-center justify-start pl-2'>
            {title}
          </div>
          <div
            className='size-10 items-center justify-end pr-2  flex dark:hover:bg-[#27272A] dark:hover:text-white dark:hover:border-[#27272A] hover:bg-[#E2E8F0]  hover:border-[#27272A]   cursor-pointer'
            onClick={() => {
              removeOption(title);
            }}
          >
            <Trash2 />
          </div>
        </div>
      }
    </div>
  );
};

export default Option;
