import { Step } from "../models/Step";
import { Task } from "../models/Task";

export interface TaskComponentProps {
  task: Task;
  onTaskDescriptionChange(task: Task, updatedDescription: string): void;
  onTaskIsDoneToggle(updatedTask: Task, isDone: boolean): void;
  onStepDescriptionChange(upatedStep: Step, updatedDescription: string): void;
  onStepIsDoneToggle(updatedStep: Step, isDone: boolean): void;
}