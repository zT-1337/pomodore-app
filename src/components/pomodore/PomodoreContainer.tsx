import { useState } from "react";
import { PomodoreContainerState } from "../../interfaces/states/PomodoreContainerState";
import "./Pomodore.css";

const initialState: PomodoreContainerState = {
  pomodoreSession: {
    roundCount: 0,
    workIntervalLengthInSeconds: 1500,
    pauseIntervalLengthInSeconds: 300,
    longPauseIntervalLengthInSeconds: 3600,
    roundCountUntilLongPause: 4,
    isTimerRunning: false,
    timeLeftInSeconds: 1500
  }
}

export function PomodoreContainer() {
  const [state, setState] = useState(initialState);

  return (
    <div className="PomodoreContainer">
      <div>
        <span>Pomodore Round: {state.pomodoreSession.roundCount}</span>
      </div>
    </div>
  )
}