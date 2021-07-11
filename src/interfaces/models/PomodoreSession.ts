export interface PomodoreSession {
  roundCount: number;
  isWorking: boolean;
  workIntervalLengthInSeconds: number;
  pauseIntervalLengthInSeconds: number;
  longPauseIntervalLengthInSeconds: number;
  roundCountUntilLongPause: number;
  isTimerRunning: boolean;
  timeLeftInSeconds: number;
  workMusicUrl: string;
  pauseMusicUrl: string;
}