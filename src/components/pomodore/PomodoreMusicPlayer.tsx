import React, { CSSProperties, useState } from "react"
import { PomodoreMusicPlayerState } from "../../interfaces/states/PomodoreMusicPlayerState"
import ReactPlayer from "react-player";
import { PomodoreMusicPlayerProps } from "../../interfaces/props/pomodore/PomodoreMusicPlayerProps";

const initialState = (): PomodoreMusicPlayerState => {
  return {
    volume: 0.2,
  }
}

export function PomodoreMusicPlayer(props: PomodoreMusicPlayerProps) {
  const [state, setState] = useState(initialState());

  const videoStyle: CSSProperties = {
    position: "absolute",
    zIndex: -100
  }
  
  const onVolumeChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      volume: event.currentTarget.valueAsNumber
    })
  }

  const playingWorkMusic = props.isTimerRunning && props.isWorking
  const playingPauseMusic = props.isTimerRunning && !props.isWorking

  return (
    <div className="PomodoreMusicPlayer">
      <input type="range" min="0" max="1" step={0.01} value={state.volume} onChange={onVolumeChange}></input>
      <ReactPlayer url={props.workMusicUrl} style={videoStyle} playing={playingWorkMusic} loop={true} volume={state.volume}></ReactPlayer>
      <ReactPlayer url={props.pauseMusicUrl} style={videoStyle} playing={playingPauseMusic} loop={true} volume={state.volume}></ReactPlayer>
    </div>
  )
}