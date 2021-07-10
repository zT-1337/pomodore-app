import { Step } from "../../models/Step";

export interface StepComponentProps {
  step: Step;
  onStepDescriptionChange(upatedStep: Step, updatedDescription: string): void;
  onStepIsDoneToggle(updatedStep: Step, isDone: boolean): void;
  onStepDeleted(deletedStep: Step): void;
}