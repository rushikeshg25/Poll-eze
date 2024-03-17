import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PollData = () => {
  return (
    <Card className='w-1/4 py-4 min-w-min max-w-sm'>
      <CardHeader className='flex items-center'>
        <CardTitle>No Polls Found!</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center w-full'></div>
      </CardContent>
    </Card>
  );
};

export default PollData;
