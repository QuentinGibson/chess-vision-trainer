import { useTimer, TimerSettings } from "react-timer-hook";
import { useEffect } from "react";
let time: Date;
export default function useGameTime() {
  useEffect(() => {
    time = new Date();
    time.setSeconds(time.getSeconds() + 60);
  }, []);
  const { seconds, minutes, hours, days, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: time,
      onExpire: () => {},
      autoStart: false,
    } as TimerSettings);
  return { seconds, minutes, start, pause, resume, restart };
}
