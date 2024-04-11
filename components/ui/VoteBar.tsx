"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface VotebarProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  option: string;
}

const Votebar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  VotebarProps
>(({ className, value, option, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-9 flex justify-center  min-w-full overflow-hidden rounded-xl bg-primary/20",
      className
    )}
    {...props}
  >
    <div className='absolute  pt-1.5 text-red-400 z-40'>{option}</div>
    <ProgressPrimitive.Indicator
      className='h-full w-full flex-1 bg-primary transition-all'
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Votebar.displayName = ProgressPrimitive.Root.displayName;

export { Votebar };
