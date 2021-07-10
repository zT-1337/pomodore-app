import "./TaskContainer.css";
import { TaskList } from "./TaskList";

export function TaskContainer() {
  return (
    <div className="TaskContainer">
      <div className="TaskHeadlineContainer">
        <span className="TaskHeadlineSpan">Tasks</span>
        <button className="addTaskButton">+</button>
      </div>
      <TaskList></TaskList>
    </div>
  )
}