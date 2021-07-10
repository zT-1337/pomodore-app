import { StepListProps } from "../../interfaces/props/StepListProps";
import { StepComponent } from "./StepComponent";

export function StepList(props: StepListProps) {
  return (
    <ul>
      {props.steps.map((step, index) => 
        <StepComponent step={step} key={`StepList-${index}`}></StepComponent>
      )}
    </ul>
  )
}