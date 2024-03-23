import { useEffect } from "react";

type returnT = {
  DifferenceinMinutes: number;
  isOpen: boolean;
};

let DifferenceinMinutes: number;
let isOpen: boolean;

export default function useTimeUntil(
  PollCreatedAt: string,
  PollDuration: number
): returnT {
  useEffect(() => {
    const PollCreationTime: Date = new Date(PollCreatedAt);
    const CurrentTime: Date = new Date();
    let difference = CurrentTime.getTime() - PollCreationTime.getTime();
    DifferenceinMinutes = Math.floor(difference / (1000 * 60));
  }, []);

  if (PollDuration > DifferenceinMinutes) isOpen = true;
  return { DifferenceinMinutes, isOpen };
}
