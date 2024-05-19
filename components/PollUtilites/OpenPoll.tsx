"use client";
import { ExternalLink } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const OpenPoll = ({ pollId }: { pollId: string }) => {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      onClick={(event) => {
        event?.stopPropagation();
        router.push(`http://localhost:3000/poll/${pollId}`);
      }}
    >
      <ExternalLink />
    </Button>
  );
};

export default OpenPoll;
