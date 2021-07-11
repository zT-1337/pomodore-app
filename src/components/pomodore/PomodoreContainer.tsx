import { useState } from "react";
import { EditedPomodoreSession } from "../../interfaces/models/EditedPomodoreSession";
import { PomodoreContainerState } from "../../interfaces/states/PomodoreContainerState";
import "./Pomodore.css";
import { PomodoreMusicPlayer } from "./PomodoreMusicPlayer";
import { PomodoreSessionContainer } from "./PomodoreSessionContainer";
import { clearCurrentTimer, PomodoreTimerContainer } from "./PomodoreTimerContainer";

const initialState= (): PomodoreContainerState => {
  return {
    pomodoreSession: {
      roundCount: 1,
      isWorking: true,
      workIntervalLengthInSeconds: 10,
      pauseIntervalLengthInSeconds: 10,
      longPauseIntervalLengthInSeconds: 3600,
      roundCountUntilLongPause: 6,
      isTimerRunning: false,
      timeLeftInSeconds: 10,
      workMusicUrl: "https://www.youtube.com/watch?v=ukAvA41acc0",
      pauseMusicUrl: "https://www.youtube.com/watch?v=t7ttLGaFCXs"
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
        if(roundCountNow % state.pomodoreSession.roundCountUntilLongPause !== 0) {
          currentTimeLeftInSeconds = state.pomodoreSession.pauseIntervalLengthInSeconds;
        } else {
          currentTimeLeftInSeconds = state.pomodoreSession.longPauseIntervalLengthInSeconds;
        }
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
    clearCurrentTimer();
    setState({
      ...state,
      pomodoreSession: {
        ...state.pomodoreSession,
        isTimerRunning: !state.pomodoreSession.isTimerRunning
      }
    })
  }

  const onTimerReset = () => {
    clearCurrentTimer();
    let currentTimeLeftInSeconds;

    if(state.pomodoreSession.isWorking) {
      currentTimeLeftInSeconds = state.pomodoreSession.workIntervalLengthInSeconds;
    } else {
      if(state.pomodoreSession.roundCount % state.pomodoreSession.roundCountUntilLongPause !== 0) {
        currentTimeLeftInSeconds = state.pomodoreSession.pauseIntervalLengthInSeconds;
      } else {
        currentTimeLeftInSeconds = state.pomodoreSession.longPauseIntervalLengthInSeconds;
      }
    }

    setState({
      ...state,
      pomodoreSession: {
        ...state.pomodoreSession,
        isTimerRunning: false,
        timeLeftInSeconds: currentTimeLeftInSeconds
      }
    })
  }

  const onSessionReset = () => {
    clearCurrentTimer();
    setState({
      ...state,
      pomodoreSession: {
        ...state.pomodoreSession,
        isTimerRunning: false,
        isWorking: true,
        roundCount: 1,
        timeLeftInSeconds: state.pomodoreSession.workIntervalLengthInSeconds
      }
    })
  }

  const onSessionEdit = (editedSession: EditedPomodoreSession) => {
    clearCurrentTimer();
    setState({
      ...state,
      pomodoreSession: {
        ...state.pomodoreSession,
        workIntervalLengthInSeconds: editedSession.workIntervalLengthInSeconds,
        pauseIntervalLengthInSeconds: editedSession.pauseIntervalLengthInSeconds,
        longPauseIntervalLengthInSeconds: editedSession.longPauseIntervalLengthInSeconds,
        roundCountUntilLongPause: editedSession.roundCountUntilLongPause,
        workMusicUrl: editedSession.workMusicUrl,
        pauseMusicUrl: editedSession.pauseMusicUrl
      }
    });
  }

  return (
    <div className="PomodoreContainer">
      <PomodoreSessionContainer roundCount={state.pomodoreSession.roundCount}
                                initialState={{
                                  workIntervalLengthInSeconds: state.pomodoreSession.workIntervalLengthInSeconds,
                                  pauseIntervalLengthInSeconds: state.pomodoreSession.pauseIntervalLengthInSeconds,
                                  longPauseIntervalLengthInSeconds: state.pomodoreSession.longPauseIntervalLengthInSeconds,
                                  roundCountUntilLongPause: state.pomodoreSession.roundCountUntilLongPause,
                                  workMusicUrl: state.pomodoreSession.workMusicUrl,
                                  pauseMusicUrl: state.pomodoreSession.pauseMusicUrl
                                }}
                                onSessionReset={onSessionReset}
                                onSessionEdit={onSessionEdit}></PomodoreSessionContainer>
      <PomodoreTimerContainer isWorking={state.pomodoreSession.isWorking}
                              isTimerRunning={state.pomodoreSession.isTimerRunning}
                              timeLeftInSeconds={state.pomodoreSession.timeLeftInSeconds}
                              onSecondPassed={onSecondPassed}
                              onTimerToggled={onTimerToggled}
                              onTimerReset={onTimerReset}></PomodoreTimerContainer>
      <PomodoreMusicPlayer  workMusicUrl={state.pomodoreSession.workMusicUrl}
                            pauseMusicUrl={state.pomodoreSession.pauseMusicUrl}
                            isTimerRunning={state.pomodoreSession.isTimerRunning}
                            isWorking={state.pomodoreSession.isWorking}></PomodoreMusicPlayer>
    </div>
  )
}