import { CSSProperties } from "react";
import { StepComponentProps } from "../../interfaces/props/StepComponentProps";

export function StepComponent(props: StepComponentProps) {

  const onDescriptionChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onStepDescriptionChange(props.step, event.currentTarget.value);
  }

  const onStepIsDoneToggle = (event: React.FormEvent<HTMLInputElement>) => {
    props.onStepIsDoneToggle(props.step, event.currentTarget.checked);
  }

  const onStepDeleted = () => {
    props.onStepDeleted(props.step);
  }

  const stepDescriptionStyle: CSSProperties = {};
  if(props.step.isDone) {
    stepDescriptionStyle.textDecoration = "line-through";
  }

  return (
    <div className="TaskComponent">
      <input type="Checkbox" checked={props.step.isDone} onChange={onStepIsDoneToggle}></input>
      <input type="text" value={props.step.describtion} className="TaskDescription" onChange={onDescriptionChange} style={stepDescriptionStyle}></input>
      <button className="RoundButton RoundButtonRed" onClick={onStepDeleted}>x</button>
    </div>
  )
}