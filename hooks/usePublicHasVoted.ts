import { useEffect, useState } from "react";

type PollT = {
  id: string;
  optionId: string;
  voted: boolean;
};

type PollsT = PollT[];

export default function usePublicHasVoted({ pollid }: { pollid: string }) {
  const [voted, setVoted] = useState<boolean>(false);
  const [polls, setPolls] = useState<PollsT>([]);

  useEffect(() => {
    async function getLocalStorageData() {
      let value = await JSON.stringify(localStorage.getItem("polls"));
      const valueObj = (await JSON.parse(value)) as PollsT;
    }
  }, []);

  if (value) {
    setPolls([...valueObj]);
  } else {
  }

  return { voted };
}
