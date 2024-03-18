import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type PollDataT = {
  titlehandler: (a: string) => void;
  descriptionhandler: (a: string) => void;
};

const PollData = ({ titlehandler, descriptionhandler }: PollDataT) => {
  return (
    <Card className='w-1/4 py-4 min-w-min max-w-sm'>
      <CardHeader>
        <CardTitle>Create your Poll</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default PollData;
