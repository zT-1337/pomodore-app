export interface PomodoreSessionContainerState {
  workIntervalLengthInSeconds: number;
  pauseIntervalLengthInSeconds: number;
  longPauseIntervalLengthInSeconds: number;
  roundCountUntilLongPause: number;
  workMusicUrl: string;
  pauseMusicUrl: string;
}