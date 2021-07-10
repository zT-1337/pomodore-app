import React, { CSSProperties } from "react";
import { TaskComponentProps } from "../../interfaces/props/TaskComponentProps";
import { StepList } from "./StepList";


export function TaskComponent(props: TaskComponentProps) {

  const onDescriptionChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.onTaskDescriptionChange(props.task, event.currentTarget.value);
  }

  const onTaskIsDoneToggle = (event: React.FormEvent<HTMLInputElement>) => {
    props.onTaskIsDoneToggle(props.task, event.currentTarget.checked);
  }

  const taskDescriptionStyle: CSSProperties = {};
  if(props.task.isDone) {
    taskDescriptionStyle.textDecoration = "line-through";
  }

  return (
    <div>
      <div className="TaskComponent">
        <input type="Checkbox" checked={props.task.isDone} onChange={onTaskIsDoneToggle}></input>
        <input type="text" value={props.task.describtion} className="TaskDescription" onChange={onDescriptionChange} style={taskDescriptionStyle}></input>
        <button className="addRemoveTaskButton addRemoveTaskButtonBlack">+</button>
        <button className="addRemoveTaskButton addRemoveTaskButtonRed">x</button>
      </div>
      {
        props.task.steps && <StepList steps={props.task.steps} 
        onStepDescriptionChange={props.onStepDescriptionChange}
        onStepIsDoneToggle={props.onStepIsDoneToggle}></StepList>
      }
    </div>
  )
}