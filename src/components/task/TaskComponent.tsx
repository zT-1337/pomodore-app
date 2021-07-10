import { TaskComponentProps } from "../../interfaces/props/TaskComponentProps";
import { StepList } from "./StepList";


export function TaskComponent(props: TaskComponentProps) {

  return (
    <div>
      <div className="TaskComponent">
        <input type="Checkbox"></input>
        <input type="text" value={props.task.describtion} className="TaskDescription"></input>
        <button className="addRemoveTaskButton addRemoveTaskButtonBlack">+</button>
        <button className="addRemoveTaskButton addRemoveTaskButtonRed">x</button>
      </div>
      {
        props.task.steps && <StepList steps={props.task.steps}></StepList>
      }
    </div>
  )
}