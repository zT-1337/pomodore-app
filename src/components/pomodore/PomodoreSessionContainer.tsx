import React, { useState } from "react";
import { PomodoreSessionContainerProps } from "../../interfaces/props/pomodore/PomodoreSessionContainerProps";

export function PomodoreSessionContainer(props: PomodoreSessionContainerProps) {
  const [isEditPomodoreVisible, setIsEditPomodoreVisible] = useState(false);
  const [pomodoreSessionContainerState, setPomodoreSessionContainerState] = useState(props.initialState);

  const onEditToggled = () => {
    setIsEditPomodoreVisible(!isEditPomodoreVisible);
  }

  const onWorkIntervalLengthInSecondsChanged = (event: React.FormEvent<HTMLInputElement>) => {
    setPomodoreSessionContainerState({
      ...pomodoreSessionContainerState,
      workIntervalLengthInSeconds: getNumberValueWithMinimal1(event)
    });
  }

  const onPauseIntervalLengthInSecondsChanged = (event: React.FormEvent<HTMLInputElement>) => {
    setPomodoreSessionContainerState({
      ...pomodoreSessionContainerState,
      pauseIntervalLengthInSeconds: getNumberValueWithMinimal1(event)
    });
  }

  const onLongPauseIntervalLengthInSecondsChanged = (event: React.FormEvent<HTMLInputElement>) => {
    setPomodoreSessionContainerState({
      ...pomodoreSessionContainerState,
      longPauseIntervalLengthInSeconds: getNumberValueWithMinimal1(event)
    });
  }

  const onRoundCountUntilLongPauseChanged = (event: React.FormEvent<HTMLInputElement>) => {
    setPomodoreSessionContainerState({
      ...pomodoreSessionContainerState,
      roundCountUntilLongPause: getNumberValueWithMinimal1(event)
    });
  }

  const getNumberValueWithMinimal1 = (event: React.FormEvent<HTMLInputElement>) => {
    let newValue = parseInt(event.currentTarget.value);

    if(!newValue || newValue < 1) {
      newValue = 1;
    }

    return newValue;
  }

  const onApplyEdit = () => {
    props.onSessionEdit({
      workIntervalLengthInSeconds: pomodoreSessionContainerState.workIntervalLengthInSeconds,
      pauseIntervalLengthInSeconds: pomodoreSessionContainerState.pauseIntervalLengthInSeconds,
      longPauseIntervalLengthInSeconds: pomodoreSessionContainerState.longPauseIntervalLengthInSeconds,
      roundCountUntilLongPause: pomodoreSessionContainerState.roundCountUntilLongPause
    });
    setIsEditPomodoreVisible(false);
  }

  return (
    <div>
      <span>{`Pomodore Round: ${props.roundCount}`}</span>
      <button className="RoundButton RoundButtonWhite" onClick={props.onSessionReset}>r</button>
      <button className="RoundButton RoundButtonWhite" onClick={onEditToggled}>e</button>
      {
        isEditPomodoreVisible &&
        <div className="EditPomodoreSessionContainer">
          <div>
            <label htmlFor="workIntervalLengthInSeconds">Work duration in seconds:</label>
            <input type="text" id="workIntervalLengthInSeconds" value={pomodoreSessionContainerState.workIntervalLengthInSeconds} onChange={onWorkIntervalLengthInSecondsChanged}></input>
          </div>
          <div>
            <label htmlFor="pauseIntervalLengthInSeconds">Pause duration in seconds:</label>
            <input type="text" id="pauseIntervalLengthInSeconds" value={pomodoreSessionContainerState.pauseIntervalLengthInSeconds} onChange={onPauseIntervalLengthInSecondsChanged}></input>
          </div>
          <div>
            <label htmlFor="longPauseIntervalLengthInSeconds">Long pause duration in seconds:</label>
            <input type="text" id="longPauseIntervalLengthInSeconds" value={pomodoreSessionContainerState.longPauseIntervalLengthInSeconds} onChange={onLongPauseIntervalLengthInSecondsChanged}></input>
          </div>
          <div>
            <label htmlFor="roundCountUntilLongPause">Rounds until long pause:</label>
            <input type="text" id="roundCountUntilLongPause" value={pomodoreSessionContainerState.roundCountUntilLongPause} onChange={onRoundCountUntilLongPauseChanged}></input>
          </div>
          <div>
            <button className="ConfirmButton" onClick={onApplyEdit}>Apply</button>
          </div>
        </div>
      }
    </div>
  )
}