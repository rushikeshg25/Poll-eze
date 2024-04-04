//pollid
import { useState } from "react";

type PollT = {
  id: string;
  optionId: string;
  voted: boolean;
};

type PollsT = PollT[];

const useHasVoted = async ({ pollid }: { pollid: string }) => {
  const [voted, setVoted] = useState<boolean>(false);
  const [polls, setPolls] = useState<PollsT>([]);

  let value = await JSON.stringify(localStorage.getItem("polls"));
  const valueObj = (await JSON.parse(value)) as PollsT;

  if (value) {
    setPolls([...valueObj]);
  } else {
  }

  return { voted };
};

export default useHasVoted;
