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
      onClick={() => {
        setCopy(true);
        navigator.clipboard.writeText(`http://localhost:3000/poll/${pollId}`);
      }}
    >
      {!copy ? <Copy /> : <Check />}
    </Button>
  );
};

export default CopyClipboard;
