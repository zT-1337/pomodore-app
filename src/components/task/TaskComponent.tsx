import { TaskComponentProps } from "../../interfaces/props/TaskComponentProps";
import { StepList } from "./StepList";


export function TaskComponent(props: TaskComponentProps) {

  const onDescriptionChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onTaskDescriptionChange(props.task, event.currentTarget.value);
  }

  return (
    <div>
      <div className="TaskComponent">
        <input type="Checkbox"></input>
        <input type="text" value={props.task.describtion} className="TaskDescription" onChange={onDescriptionChange}></input>
        <button className="addRemoveTaskButton addRemoveTaskButtonBlack">+</button>
        <button className="addRemoveTaskButton addRemoveTaskButtonRed">x</button>
      </div>
      {
        props.task.steps && <StepList steps={props.task.steps} onStepDescriptionChange={props.onStepDescriptionChange}></StepList>
      }
    </div>
  )
}