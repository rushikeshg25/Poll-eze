import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PollOptions from "./PollOptions";
type OptionT = {
  title: string;
  votes: number;
  totalVotes: number;
};

type PollDataT = {
  titlehandler: (a: string) => void;
  descriptionhandler: (a: string) => void;
  addOptions: (a: OptionT[]) => void;
};

const PollData = ({
  titlehandler,
  descriptionhandler,
  addOptions,
}: PollDataT) => {
  return (
    <Card className=' py-3 lg:w-1/5'>
      <CardHeader>
        <CardTitle>Create your Poll</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label>Title</Label>
              <Input
                placeholder='Title of your Poll'
                onChange={(e) => titlehandler(e.target.value)}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label>Description</Label>
              <Textarea
                placeholder='Description of your Poll'
                onChange={(e) => descriptionhandler(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className='flex flex-col space-y-1.5'>
          <Label>Options</Label>
          <PollOptions addOptions={addOptions} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PollData;
