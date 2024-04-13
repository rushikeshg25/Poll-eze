import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { CardFooter } from "./card";

const PollLoadingSkeleton = ({ NumofPolls }: { NumofPolls: number }) => {
  if (NumofPolls === 0) NumofPolls = 9;
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  ")}>
      {[...Array(NumofPolls).keys()].map((i) => (
        <Card key={i}>
          <Skeleton className='mt-8 h-20 w-full' />
          <div className='flex flex-col gap-2 py-4'>
            <Skeleton className='w-full h-5' />
            <Skeleton className='w-full h-5' />
            <Skeleton className='w-full h-5' />
            <Skeleton className='w-full h-5' />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PollLoadingSkeleton;

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full px-4  overflow-hidden bg-black border border-transparent dark:border-white/[0.2]  relative z-20",
        className
      )}
    >
      <div className='relative z-50'>
        <div className=''>{children}</div>
      </div>
    </div>
  );
};
