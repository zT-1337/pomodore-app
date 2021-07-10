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
      workIntervalLengthInSeconds: 2,
      pauseIntervalLengthInSeconds: 2,
      longPauseIntervalLengthInSeconds: 10,
      roundCountUntilLongPause: 4,
      isTimerRunning: false,
      timeLeftInSeconds: 2
    }
  } 
}

export function PomodoreContainer() {
  const [state, setState] = useState(initialState());

  const onSecondPassed = () => {
    let currentTimeLeftInSeconds = state.pomodoreSession.timeLeftInSeconds - 1;
    let isWorkingNow = state.pomodoreSession.isWorking;
    let roundCountNow = state.pomodoreSession.roundCount;

    if(currentTimeLeftInSeconds < 0) {
      isWorkingNow = !isWorkingNow;

      if(isWorkingNow) {
        currentTimeLeftInSeconds = state.pomodoreSession.workIntervalLengthInSeconds;
        roundCountNow = roundCountNow + 1;
      } else {
        currentTimeLeftInSeconds = state.pomodoreSession.pauseIntervalLengthInSeconds;
      }
    }

    setState({
      ...state,
      pomodoreSession: {
        ...state.pomodoreSession,
        roundCount: roundCountNow,
        isWorking: isWorkingNow,
        timeLeftInSeconds: currentTimeLeftInSeconds
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
      <PomodoreSessionContainer roundCount={state.pomodoreSession.roundCount}></PomodoreSessionContainer>
      <PomodoreTimerContainer isWorking={state.pomodoreSession.isWorking}
                              isTimerRunning={state.pomodoreSession.isTimerRunning}
                              timeLeftInSeconds={state.pomodoreSession.timeLeftInSeconds}
                              onSecondPassed={onSecondPassed}
                              onTimerToggled={onTimerToggled}></PomodoreTimerContainer>
    </div>
  )
}