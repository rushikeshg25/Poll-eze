"use client";
import { Copy } from "lucide-react";
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const CopyClipboard = ({ pollId }: { pollId: string }) => {
  const [copy, setCopy] = useState(false);
  return (
    <Button
      variant={"outline"}
      onClick={(event) => {
        event?.stopPropagation();
        setCopy(true);
        navigator.clipboard.writeText(
          `https://poll-eze.vercel.app/poll/${pollId}`
        );
        setTimeout(() => {
          setCopy(false);
        }, 4000);
      }}
    >
      {!copy ? <Copy /> : <Check />}
    </Button>
  );
};

export default CopyClipboard;
