import { CSSProperties } from "react";
import { StepComponentProps } from "../../interfaces/props/StepComponentProps";

export function StepComponent(props: StepComponentProps) {

  const onDescriptionChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onStepDescriptionChange(props.step, event.currentTarget.value);
  }

  const stepDescriptionStyle: CSSProperties = {};
  if(props.step.isDone) {
    stepDescriptionStyle.textDecoration = "line-through";
  }

  return (
    <div className="TaskComponent">
      <input type="Checkbox" checked={props.step.isDone}></input>
      <input type="text" value={props.step.describtion} className="TaskDescription" onChange={onDescriptionChange} style={stepDescriptionStyle}></input>
      <button className="addRemoveTaskButton addRemoveTaskButtonRed">x</button>
    </div>
  )
}