export interface PomodoreTimerContainerProps {
  isWorking: boolean;
  isTimerRunning: boolean;
  timeLeftInSeconds: number;
  onSecondPassed(): void;
  onTimerToggled(): void;
  onTimerReset(): void;
}