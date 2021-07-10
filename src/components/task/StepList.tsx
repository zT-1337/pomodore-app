import { StepListProps } from "../../interfaces/props/task/StepListProps";
import { StepComponent } from "./StepComponent";

export function StepList(props: StepListProps) {
  return (
    <ul>
      {props.steps.map((step, index) => 
        <StepComponent step={step} key={`StepList-${index}`} 
        onStepDescriptionChange={props.onStepDescriptionChange}
        onStepIsDoneToggle={props.onStepIsDoneToggle}
        onStepDeleted={props.onStepDeleted}></StepComponent>
      )}
    </ul>
  )
}