import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PollDuration = () => {
  return (
    <Card className='w-1/4 py-4 min-w-min max-w-sm'>
      <CardHeader>
        <CardTitle>Set your Poll's Duration</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label>Title</Label>
              <Input placeholder='Title of your Poll' />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PollDuration;
