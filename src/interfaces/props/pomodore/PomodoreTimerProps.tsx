export interface PomodoreTimerProps {
  isTimerRunning: boolean;
  timeLeftInSeconds: number;
  onSecondPassed(): void;
}