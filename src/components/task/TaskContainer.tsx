import { TaskContainerState } from "../../interfaces/states/TaskContainerState";
import { useState } from "react";
import "./Task.css";
import { TaskList } from "./TaskList";

const initialState: TaskContainerState = {
  tasks: [
    {
      describtion: "do some stuff",
      isDone: true,
      steps: []
    },
    {
      describtion: "do more stuff",
      isDone: false,
      steps: [
        {
          describtion: "do step 1",
          isDone: true
        },
        {
          describtion: "do step 2",
          isDone: false
        }
      ] 
    }
  ]
}

export function TaskContainer() {
  const [state, setState] = useState(initialState);

  return (
    <div className="TaskContainer">
      <div className="TaskHeadlineContainer">
        <span className="TaskHeadlineSpan">Tasks</span>
        <button className="addTaskButton">+</button>
      </div>
      <TaskList tasks={state.tasks}></TaskList>
    </div>
  )
}