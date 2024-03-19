import React from "react";
import { Card, CardHeader } from "../ui/card";
import type { PollT } from "@/types/PollData";

const Finalize = (poll: { poll: PollT }) => {
  return (
    <Card>
      <CardHeader>{}</CardHeader>
    </Card>
  );
};

export default Finalize;
