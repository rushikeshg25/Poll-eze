"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { PollwithOptionT } from "@/types/PollwithOptions";
import { Button } from "./button";
import AvatarStack from "./AvatarStack";
import OptionBar from "./OptionBar";
import { useMutation } from "@tanstack/react-query";
import { votePublicPoll } from "@/actions/vote/Publicvote";
import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";

const LandingPagePollOptions = ({ poll }: { poll: PollwithOptionT | null }) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const [totalVotes, setTotalVotes] = useState(poll?.PolltotalVotes as number);
  const { toast } = useToast();
  const [optionPercentage, setOptionPercentage] = useState<
    { optionid: string; percentage: Number }[]
  >([]);

  const calculateOptionPercentages = (optionId: string) => {
    setOptionPercentage([]);
    poll?.options.map((option) => {
      if (option.id === optionId) {
        setOptionPercentage((prev) => [
          ...prev,
          {
            optionid: option.id,
            percentage: Math.floor(
              ((option.votes + 1) / (option.totalVotes + 1)) * 100
            ),
          },
        ]);
      } else {
        setOptionPercentage((prev) => [
          ...prev,
          {
            optionid: option.id,
            percentage: Math.floor(
              (option.votes / (option.totalVotes + 1)) * 100
            ),
          },
        ]);
      }
    });
  };
  const { mutate: server_votePublicPoll } = useMutation({
    mutationFn: votePublicPoll,
  });

  const voteHandler = async () => {
    calculateOptionPercentages(selectedValue as string);
    setTotalVotes(totalVotes + 1);
    setHasVoted((cur) => {
      if (cur) {
        setSelectedValue(undefined);
        return false;
      }
      toast({
        title: `Voted for ${
          poll?.options.find((option) => option.id === selectedValue)?.title
        }`,
      });
      return true;
    });
  };

  return (
    <div className='flex flex-col gap-3 min-w-min'>
      <RadioGroup
        value={selectedValue}
        onValueChange={setSelectedValue}
        className='pl-4'
      >
        <div className='flex  flex-col gap-2  min-w-min'>
          {poll?.options.map((option) => (
            <div key={option.id} className='flex flex-col'>
              <div className='inline-flex grid-flow-col items-center gap-4'>
                {hasVoted ? (
                  <div className='pt-2 w-10 font-semibold'>
                    {optionPercentage.map(
                      (i) =>
                        i.optionid === option.id && (
                          <div key={i.optionid} className='flex items-center '>
                            {String(i.percentage)}%
                          </div>
                        )
                    )}
                  </div>
                ) : (
                  <RadioGroupItem
                    value={option.id}
                    id={`option-${option.id}`}
                  />
                )}
                <Label
                  htmlFor={`option-${option.id}`}
                  className='text-md md:text-lg font-medium text-gray-900 dark:text-gray-300'
                >
                  {option.title}
                </Label>
                {selectedValue === option.id && hasVoted && (
                  <div className='flex items-center justify-center border border-gray-900 dark:border-gray-300 rounded-full  size-5'>
                    <Check className='' />
                  </div>
                )}
              </div>
              <OptionBar
                hasVoted={hasVoted}
                option={option}
                selected={selectedValue}
              />
            </div>
          ))}
        </div>
      </RadioGroup>
      <div className='flex gap-2 my-2'>
        <AvatarStack />
        <div className='text-[#5F6061] dark:text-gray-400 flex items-center justify-center whitespace-nowrap'>
          {totalVotes} votes
        </div>
        <div className='flex items-center justify-center'>
          <div className='size-1 bg-[#5F6061] dark:bg-gray-400 rounded-lg'></div>
        </div>
        <div className='text-[#5F6061] dark:text-gray-400 flex items-center justify-center whitespace-nowrap'>
          10 days left
        </div>
        <div className='flex-grow'></div>
        <Button
          className='bg-[#2563EB]'
          onClick={voteHandler}
          disabled={selectedValue === undefined}
        >
          {hasVoted ? <RotateCcw className='dark:text-gray-200' /> : "Vote"}
        </Button>
      </div>
    </div>
  );
};

export default LandingPagePollOptions;
