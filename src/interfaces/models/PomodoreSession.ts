export interface PomodoreSession {
  roundCount: number;
  workIntervalLengthInSeconds: number;
  pauseIntervalLengthInSeconds: number;
  longPauseIntervalLengthInSeconds: number;
  roundCountUntilLongPause: number;
  isTimerRunning: boolean;
  timeLeftInSeconds: number;
}