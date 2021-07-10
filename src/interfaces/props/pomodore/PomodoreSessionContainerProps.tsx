import { EditedPomodoreSession } from "../../models/EditedPomodoreSession";
import { PomodoreSessionContainerState } from "../../states/PomodoreSessionContainerState";

export interface PomodoreSessionContainerProps {
  roundCount: number;
  initialState: PomodoreSessionContainerState;
  onSessionReset(): void;
  onSessionEdit(editedSession: EditedPomodoreSession): void;
}