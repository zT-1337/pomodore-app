import { useEffect } from "react";
import { PomodoreTimerContainerProps } from "../../interfaces/props/pomodore/PomodoreTimerContainerProps";

let timerId: any;

export function PomodoreTimerContainer(props: PomodoreTimerContainerProps) {

  useEffect(() => {
    if(props.isTimerRunning) {
      timerId = setTimeout(props.onSecondPassed, 1000);
    }
  });

  const onTimerToggled = () => {
    if(timerId) clearTimeout(timerId);
    props.onTimerToggled();
  }
  
  return (
    <div className="PomodoreTimer">
      <span>{calculateTimerStatus(props.isWorking, props.timeLeftInSeconds)}</span>
      <button className="RoundButton RoundButtonWhite">r</button>
      <button className="RoundButton RoundButtonWhite" onClick={onTimerToggled}>p</button>
    </div>
  )
}

function calculateTimerStatus(isWorking: boolean, timeLeftInSeconds: number): string {
  let pomodoreStatus: string = "Pausing";
  if(isWorking) {
    pomodoreStatus = "Working";
  }

  const minuteCount = Math.floor(timeLeftInSeconds/60);
  const secondCount = timeLeftInSeconds % 60;

  return `${pomodoreStatus}: ${convertTimeNumberToString(minuteCount)}:${convertTimeNumberToString(secondCount)}`;
}

function convertTimeNumberToString(value: number): string {
  var result = value.toString();
  if(value < 10) {
    result = "0"+result;
  }

  return result;
}