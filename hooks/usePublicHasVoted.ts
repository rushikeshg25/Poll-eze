//pollid
import { useState } from "react";

type ReturnT = {
  voted: boolean;
};

type PollT = {
  id: string;
  voted: boolean;
};

type PollsT = PollT[];

const useHasVoted = ({ pollid }: { pollid: string }): ReturnT => {
  const [voted, setVoted] = useState<boolean>(false);
  const [polls, setPolls] = useState<PollsT>([]);

  let value = JSON.stringify(localStorage.getItem("polls"));
  const valueObj = JSON.parse(value) as PollsT;

  if (value) {
    setPolls([...valueObj]);
  } else {
  }

  return { voted };
};

export default useHasVoted;
