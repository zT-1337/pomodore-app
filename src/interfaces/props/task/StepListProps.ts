import { Step } from "../../models/Step";

export interface StepListProps {
  steps: Step[];
  onStepDescriptionChange(upatedStep: Step, updatedDescription: string): void;
  onStepIsDoneToggle(updatedStep: Step, isDone: boolean): void;
  onStepDeleted(deletedStep: Step): void;
}