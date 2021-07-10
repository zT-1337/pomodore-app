import { StepComponentProps } from "../../interfaces/props/StepComponentProps";

export function StepComponent(props: StepComponentProps) {
    return (
      <div className="TaskComponent">
        <input type="Checkbox"></input>
        <input type="text" value={props.step.describtion} className="TaskDescription"></input>
        <button className="addRemoveTaskButton addRemoveTaskButtonRed">x</button>
      </div>
    )
}