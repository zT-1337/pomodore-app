import { Step } from "../models/Step";
import { Task } from "../models/Task";

export interface TaskListProps {
  tasks: Task[];
  onTaskDescriptionChange(task: Task, updatedDescription: string): void;
  onStepDescriptionChange(upatedStep: Step, updatedDescription: string): void;
}