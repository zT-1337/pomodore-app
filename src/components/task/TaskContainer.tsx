import { TaskContainerState } from "../../interfaces/states/TaskContainerState";
import "./Task.css";
import { TaskList } from "./TaskList";
import { Task } from "../../interfaces/models/Task";
import { Step } from "../../interfaces/models/Step";
import { loadLocalStorageState, useLocalStorageState } from "../../utils/LocalStorageState";

const TaskContainerLocalStorage = "TaskContainerLocalStorage";

const initialState = (): TaskContainerState => {
  return loadLocalStorageState(TaskContainerLocalStorage, {tasks: []});
}

export function TaskContainer() {
  const [state, setState] = useLocalStorageState(initialState(), TaskContainerLocalStorage);

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

  const onTaskDeleted = (deletedTask: Task) => {
    setState({
      ...state,
      tasks: state.tasks.filter((task) => task !== deletedTask)
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

  const onTaskAdded = () => {
    setState({
      ...state,
      tasks: [...state.tasks, {describtion: "", isDone: false, steps: []}]
    })
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

  const onStepDeleted = (deletedStep: Step) => {
    setState({
      ...state,
      tasks: state.tasks.map((task) => {
        return {
          ...task,
          steps: task.steps.filter((step) => step !== deletedStep)
        }
      })
    });
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

  const onStepAdded = (extendedTask: Task) => {
    setState({
      ...state,
      tasks: state.tasks.map((task) => {
        if(task !== extendedTask) return task;

        return {
          ...task,
          steps: [...task.steps, {describtion: "", isDone: false}]
        }
      })
    })
  }

  return (
    <div className="TaskContainer">
      <div className="TaskHeadlineContainer">
        <span className="TaskHeadlineSpan">Tasks</span>
        <button className="RoundButton RoundButtonWhite" onClick={onTaskAdded}>+</button>
      </div>
      <div className="TaskListContainer">
        <TaskList tasks={state.tasks} 
                  onTaskDescriptionChange={onTaskDescriptionChange}
                  onTaskIsDoneToggle={onTaskIsDoneToggle}
                  onTaskDeleted={onTaskDeleted}
                  onStepDescriptionChange={onStepDescriptionChange}
                  onStepIsDoneToggle={onStepIsDoneToggle}
                  onStepDeleted={onStepDeleted}
                  onStepAdded={onStepAdded}></TaskList>
      </div>
    </div>
  )
}