import { useState } from "react";
import { PomodoreSessionContainerProps } from "../../interfaces/props/pomodore/PomodoreSessionContainerProps";

export function PomodoreSessionContainer(props: PomodoreSessionContainerProps) {
  const [isEditPomodoreVisible, setIsEditPomodoreVisible] = useState(false);

  const onEditToggled = () => {
    setIsEditPomodoreVisible(!isEditPomodoreVisible);
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
            <input type="text" id="workIntervalLengthInSeconds"></input>
          </div>
          <div>
            <label htmlFor="pauseIntervalLengthInSeconds">Pause duration in seconds:</label>
            <input type="text" id="pauseIntervalLengthInSeconds"></input>
          </div>
          <div>
            <label htmlFor="longPauseIntervalLengthInSeconds">Long pause duration in seconds:</label>
            <input type="text" id="longPauseIntervalLengthInSeconds"></input>
          </div>
          <div>
            <label htmlFor="roundCountUntilLongPause">Rounds until long pause:</label>
            <input type="text" id="roundCountUntilLongPause"></input>
          </div>
          <div>
            <button className="ConfirmButton">Apply</button>
          </div>
        </div>
      }
    </div>
  )
}