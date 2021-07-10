import { TaskListProps } from "../../interfaces/props/TaskListProps";
import { TaskComponent } from "./TaskComponent";

export function TaskList(props: TaskListProps) {
  return (
    <ul>
      {props.tasks.map((task, index) => 
        <TaskComponent task={task} key={`TaskList-${index}`} 
        onTaskDescriptionChange={props.onTaskDescriptionChange}
        onTaskIsDoneToggle={props.onTaskIsDoneToggle}
        onStepDescriptionChange={props.onStepDescriptionChange}
        onStepIsDoneToggle={props.onStepIsDoneToggle}></TaskComponent>
      )}
    </ul>
  )
}