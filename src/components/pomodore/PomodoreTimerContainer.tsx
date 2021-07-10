import { useEffect } from "react";
import { PomodoreTimerContainerProps } from "../../interfaces/props/pomodore/PomodoreTimerContainerProps";

export function PomodoreTimerContainer(props: PomodoreTimerContainerProps) {

  useEffect(() => {
    if(props.isTimerRunning) {
      setTimeout(() => {
        props.onSecondPassed();
      }, 1000);
    }
  });
  
  return (
    <div className="PomodoreTimer">
      <span>{calculateTimerStatus(props.isWorking, props.timeLeftInSeconds)}</span>
      <button className="RoundButton RoundButtonWhite">r</button>
      <button className="RoundButton RoundButtonWhite">p</button>
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