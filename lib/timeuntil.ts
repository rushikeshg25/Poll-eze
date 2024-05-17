import date from "date-and-time";
type returnT = {
  timeLeft: number;
  isOpen: boolean;
  timeLeftString: string;
};

function PollTime(PollCreatedAt: Date, PollDuration: number) {
  const PollCreationTime: Date = PollCreatedAt;
  const CurrentTime: Date = new Date();
  var isOpen: boolean = false;

  let Difference: number = date
    .subtract(CurrentTime, PollCreationTime)
    .toHours();

  Difference = Math.floor(Difference); // diff is how much time has passed since the poll was created
  const timeLeft = PollDuration - Difference;
  let timeLeftString = "";
  if (timeLeft > 0) {
    isOpen = true;
    if (timeLeft > 24) timeLeftString = `${Math.floor(timeLeft / 24)} days`;
    else if (timeLeft > 1) timeLeftString = `${timeLeft} hours`;
    else timeLeftString = `${timeLeft * 60} minutes`;
  }

  return { timeLeft, isOpen, timeLeftString };
}

const timeUntil = (PollCreatedAt: Date, PollDuration: number): returnT => {
  const DataObj = PollTime(PollCreatedAt, PollDuration);
  return DataObj;
};

export default timeUntil;
