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
    props.onTimerToggled();
  }

  const onTimerReset = () => {
    props.onTimerReset();
  }

  const calculateTimerStatus = () => {
    let pomodoreStatus: string = "Pausing";
    if(props.isWorking) {
      pomodoreStatus = "Working";
    }
  
    const minuteCount = Math.floor(props.timeLeftInSeconds/60);
    const secondCount = props.timeLeftInSeconds % 60;
  
    return `${pomodoreStatus}: ${convertTimeNumberToString(minuteCount)}:${convertTimeNumberToString(secondCount)}`;
  }

  const convertTimeNumberToString = (value: number): string => {
    var result = value.toString();
    if(value < 10) {
      result = "0"+result;
    }

    return result;
  }
  
  return (
    <div className="PomodoreTimer">
      <span>{calculateTimerStatus()}</span>
      <button className="RoundButton RoundButtonWhite" onClick={onTimerReset}>r</button>
      <button className="RoundButton RoundButtonWhite" onClick={onTimerToggled}>p</button>
    </div>
  )
}

export function clearCurrentTimer() {
  if(timerId) clearTimeout(timerId);
}