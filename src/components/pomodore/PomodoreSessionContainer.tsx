import { PomodoreSessionContainerProps } from "../../interfaces/props/pomodore/PomodoreSessionContainerProps";

export function PomodoreSessionContainer(props: PomodoreSessionContainerProps) {
  return (
    <div>
      <span>{`Pomodore Round: ${props.roundCount}`}</span>
      <button className="RoundButton RoundButtonWhite">r</button>
      <button className="RoundButton RoundButtonWhite">e</button>
    </div>
  )
}