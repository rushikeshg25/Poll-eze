import date from "date-and-time";
import { Diff } from "lucide-react";
type returnT = {
  Difference: number;
  isOpen: boolean;
};

function PollTime(PollCreatedAt: Date, PollDuration: number) {
  const PollCreationTime: Date = PollCreatedAt;
  const CurrentTime: Date = new Date();
  var isOpen: boolean = false;

  let Difference: number = date
    .subtract(CurrentTime, PollCreationTime)
    .toHours();
  // console.log("Difference", Difference);
  // console.log(PollDuration);
  Difference = Math.floor(Difference);
  if (PollDuration > Difference) {
    isOpen = true;
    if (Difference < 1) {
      Difference = 0;
    }
  }

  return { Difference, isOpen };
}

const useTimeUntil = (PollCreatedAt: Date, PollDuration: number): returnT => {
  const DataObj = PollTime(PollCreatedAt, PollDuration);
  return DataObj;
};

export default useTimeUntil;
