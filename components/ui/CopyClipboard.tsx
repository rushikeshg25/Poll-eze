"use client";
import { Copy } from "lucide-react";
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

const CopyClipboard = ({ pollId }: { pollId: string }) => {
  const [copy, setCopy] = useState(false);
  return (
    <Button
      variant={"ghost"}
      onClick={(event) => {
        event?.stopPropagation();
        setCopy(true);
        navigator.clipboard.writeText(`http://localhost:3000/poll/${pollId}`);
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
