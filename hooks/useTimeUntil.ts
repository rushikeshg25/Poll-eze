import date from "date-and-time";
import { Diff } from "lucide-react";
type returnT = {
  timeLeft: number;
  isOpen: boolean;
  closingSoon: boolean;
};

function PollTime(PollCreatedAt: Date, PollDuration: number) {
  const PollCreationTime: Date = PollCreatedAt;
  const CurrentTime: Date = new Date();
  var isOpen: boolean = false;
  var closingSoon: boolean = false;

  let Difference: number = date
    .subtract(CurrentTime, PollCreationTime)
    .toHours();

  Difference = Math.floor(Difference); // diff is how much time has passed since the poll was created
  const timeLeft = PollDuration - Difference;
  // console.log("timeLeft", timeLeft);
  if (timeLeft > 0) {
    isOpen = true;
    if (timeLeft < 1) {
      closingSoon = true;
    }
  }

  return { timeLeft, isOpen, closingSoon };
}

const useTimeUntil = (PollCreatedAt: Date, PollDuration: number): returnT => {
  const DataObj = PollTime(PollCreatedAt, PollDuration);
  return DataObj;
};

export default useTimeUntil;
