"use client";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const OpenPoll = ({ pollId }: { pollId: string }) => {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      onClick={(event) => {
        event?.stopPropagation();
        router.push(`https://poll-eze.vercel.app/poll/${pollId}`);
      }}
    >
      <ExternalLink />
    </Button>
  );
};

export default OpenPoll;
