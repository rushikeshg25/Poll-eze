import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

type PollDurationT = {
  durationhandler: (a: number) => void;
};

const PollDuration = ({ durationhandler }: PollDurationT) => {
  const [custom, setCustom] = useState(false);
  return (
    <Card className='w-1/4 py-4 min-w-min max-w-sm'>
      <CardHeader>
        <CardTitle>Set your Poll's Duration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid w-full items-center gap-4'>
          <div className='flex flex-col space-y-1.5 items-center gap-5'>
            <Select
              onValueChange={(e) => {
                if (e !== "custom") {
                  durationhandler(Number(e));
                  setCustom(false);
                } else {
                  setCustom(true);
                }
              }}
            >
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Duration' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>1 hr</SelectItem>
                <SelectItem value='6'>6 hrs</SelectItem>
                <SelectItem value='12'>12 hrs</SelectItem>
                <SelectItem value='24'>24 hrs</SelectItem>
                <SelectItem value='custom'>Custom</SelectItem>
              </SelectContent>
            </Select>

            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <div className='flex items-center justify-center w-full'>
                  <Label>Custom Duration</Label>
                </div>
                <Input
                  disabled={!custom}
                  placeholder='Enter Duration in hrs'
                  onChange={(e) => durationhandler(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PollDuration;
