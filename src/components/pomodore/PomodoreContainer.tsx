import { useState } from "react";
import { PomodoreContainerState } from "../../interfaces/states/PomodoreContainerState";
import "./Pomodore.css";
import { PomodoreSessionContainer } from "./PomodoreSessionContainer";
import { PomodoreTimerContainer } from "./PomodoreTimerContainer";

const initialState= (): PomodoreContainerState => {
  return {
    pomodoreSession: {
      roundCount: 0,
      isWorking: true,
      workIntervalLengthInSeconds: 1500,
      pauseIntervalLengthInSeconds: 300,
      longPauseIntervalLengthInSeconds: 3600,
      roundCountUntilLongPause: 4,
      isTimerRunning: false,
      timeLeftInSeconds: 1500
    }
  } 
}

export function PomodoreContainer() {
  const [state, setState] = useState(initialState());

  const onSecondPassed = () => {
    const currentTimeLeftInSeconds = state.pomodoreSession.timeLeftInSeconds;
    setState({
      ...state,
      pomodoreSession: {
        ...state.pomodoreSession,
        timeLeftInSeconds: currentTimeLeftInSeconds-1
      }
    })
  };

  const onTimerToggled = () => {
    setState({
      ...state,
      pomodoreSession: {
        ...state.pomodoreSession,
        isTimerRunning: !state.pomodoreSession.isTimerRunning
      }
    })
  }

  return (
    <div className="PomodoreContainer">
      <PomodoreSessionContainer></PomodoreSessionContainer>
      <PomodoreTimerContainer isWorking={state.pomodoreSession.isWorking}
                              isTimerRunning={state.pomodoreSession.isTimerRunning}
                              timeLeftInSeconds={state.pomodoreSession.timeLeftInSeconds}
                              onSecondPassed={onSecondPassed}
                              onTimerToggled={onTimerToggled}></PomodoreTimerContainer>
    </div>
  )
}