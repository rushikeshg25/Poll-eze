import { Dispatch, useEffect, useState } from "react";

export default function useTimeUntil(
  date?: number
): [string | undefined, Dispatch<number>] {
  const [dateState, setDateState] = useState<number | undefined>(date);
  const [timeUntil, setTimeUntil] = useState<string>("...");

  useEffect(() => {
    if (!date && !dateState) return;
    setTimeUntil(getTimeUntil(dateState as number));
    setInterval(() => setTimeUntil(getTimeUntil(dateState as number)), 5000);
  }, [dateState]);

  return [timeUntil, setDateState];
}

function getTimeUntil(date: number): string {
  const untilDate = new Date(date);
  const currentDate = new Date();

  const timeBetween = untilDate.getTime() - currentDate.getTime();
  const minutes = Math.floor(timeBetween / 60000);
  const hours = Math.floor(Math.abs(minutes) / 60);
  const days = Math.floor(hours / 24);

  if (Math.abs(minutes) < 60)
    return `${Math.abs(minutes)} minute${Math.abs(minutes) === 1 ? "" : "s"} ${
      minutes < 0 ? "ago" : ""
    }`;
  if (hours < 24)
    return `${Math.abs(hours)} hour${Math.abs(hours) === 1 ? "" : "s"} ${
      minutes < 0 ? "ago" : ""
    }`;
  return `${days} day${days === 1 ? "" : "s"} ${minutes < 0 ? "ago" : ""}`;
}
