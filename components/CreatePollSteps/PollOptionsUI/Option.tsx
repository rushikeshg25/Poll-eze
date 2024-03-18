import { Card } from "@/components/ui/card";
import React from "react";
import { Trash2 } from "lucide-react";
import { useStore } from "@/zustand/store";
import { Button } from "@/components/ui/button";
const Option = ({ title }: { title: string }) => {
  const { removeOption } = useStore();
  return (
    <Card>
      {
        <div className='flex flex-row'>
          <div>{title}</div>
          <Button
            onClick={() => {
              removeOption(title);
            }}
          >
            <Trash2 />
          </Button>
        </div>
      }
    </Card>
  );
};

export default Option;
