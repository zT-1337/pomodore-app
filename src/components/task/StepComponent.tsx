import { StepComponentProps } from "../../interfaces/props/StepComponentProps";

export function StepComponent(props: StepComponentProps) {

  const onDescriptionChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onStepDescriptionChange(props.step, event.currentTarget.value);
  }

  return (
    <div className="TaskComponent">
      <input type="Checkbox"></input>
      <input type="text" value={props.step.describtion} className="TaskDescription" onChange={onDescriptionChange}></input>
      <button className="addRemoveTaskButton addRemoveTaskButtonRed">x</button>
    </div>
  )
}