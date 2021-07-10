import { Step } from "./Step";

export interface Task {
  describtion: string;
  isDone: boolean;
  steps: Step[];
}