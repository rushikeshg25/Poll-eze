import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PollOptions = () => {
  return (
    <Card className='w-1/4 py-4 min-w-min max-w-sm'>
      <CardHeader>
        <CardTitle>Configure your Poll</CardTitle>
      </CardHeader>
      <CardContent>
        <form id='PollDataForm'>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='title'>Title</Label>
              <Input id='title' placeholder='Title of your Poll' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='Description'>Description</Label>
              <Input id='Description' placeholder='Description of your Poll' />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PollOptions;
