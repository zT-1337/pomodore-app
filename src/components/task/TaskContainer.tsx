import { TaskContainerState } from "../../interfaces/states/TaskContainerState";
import { useState } from "react";
import "./Task.css";
import { TaskList } from "./TaskList";
import { Task } from "../../interfaces/models/Task";
import { Step } from "../../interfaces/models/Step";

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

  const onTaskDescriptionChange = (updatedTask: Task, updatedDescription: string) => {
    setState({
      ...state,
      tasks: state.tasks.map((currentTask) => {
        if(currentTask !== updatedTask) {
          return currentTask;
        }

        return {
          ...currentTask,
          describtion: updatedDescription
        };
      })
    });
  }

  const onTaskIsDoneToggle = (updatedTask: Task, isDone: boolean) => {
    setState({
      ...state,
      tasks: state.tasks.map((currentTask) => {
        if(currentTask !== updatedTask) {
          return currentTask;
        }

        return {
          ...currentTask,
          isDone: isDone
        };
      })
    });
  }

  const onStepDescriptionChange = (upatedStep: Step, updatedDescription: string) => {
    setState({
      ...state,
      tasks: state.tasks.map((currentTask) => {
        return {
          ...currentTask,
          steps: currentTask.steps.map((currentStep) => {
            if(currentStep !== upatedStep) {
              return currentStep;
            }

            return {
              ...currentStep,
              describtion: updatedDescription
            }
          })
        }
      })
    })
  }

  const onStepIsDoneToggle = (updatedStep: Step, isDone: boolean) => {
    setState({
      ...state,
      tasks: state.tasks.map((currentTask) => {
        return {
          ...currentTask,
          steps: currentTask.steps.map((currentStep) => {
            if(currentStep !== updatedStep) {
              return currentStep;
            }

            return {
              ...currentStep,
              isDone: isDone
            }
          })
        }
      })
    });
  }

  return (
    <div className="TaskContainer">
      <div className="TaskHeadlineContainer">
        <span className="TaskHeadlineSpan">Tasks</span>
        <button className="addRemoveTaskButton addRemoveTaskButtonWhite">+</button>
      </div>
      <TaskList tasks={state.tasks} 
                onTaskDescriptionChange={onTaskDescriptionChange}
                onTaskIsDoneToggle={onTaskIsDoneToggle} 
                onStepDescriptionChange={onStepDescriptionChange}
                onStepIsDoneToggle={onStepIsDoneToggle}></TaskList>
    </div>
  )
}