import date from "date-and-time";
type returnT = {
  Difference: number;
  isOpen: boolean;
  unit: string;
};

function PollTime(PollCreatedAt: Date, PollDuration: number) {
  const PollCreationTime: Date = PollCreatedAt;
  const CurrentTime: Date = new Date();
  var isOpen: boolean = false;
  var unit: string = "";
  let Difference: number = date
    .subtract(CurrentTime, PollCreationTime)
    .toMinutes();

  if (PollDuration > Difference) {
    isOpen = true;
    if (Difference < 60) {
      if (Difference === 1) unit = "min";
      else unit = "mins";
    } else {
      Difference = Math.floor(Difference / 60);
      if (Difference === 1) unit = "hr";
      else unit = "hrs";
    }
  } else {
    isOpen = false;
  }
  Difference = Math.floor(Difference);
  return { Difference, isOpen, unit };
}

const useTimeUntil = (PollCreatedAt: Date, PollDuration: number): returnT => {
  const DataObj = PollTime(PollCreatedAt, PollDuration);
  return DataObj;
};

export default useTimeUntil;
