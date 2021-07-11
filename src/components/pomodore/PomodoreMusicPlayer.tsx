import React, { CSSProperties, useState } from "react"
import { PomodoreMusicPlayerState } from "../../interfaces/states/PomodoreMusicPlayerState"
import ReactPlayer from "react-player";
import { PomodoreMusicPlayerProps } from "../../interfaces/props/pomodore/PomodoreMusicPlayerProps";

const initialState = (): PomodoreMusicPlayerState => {
  return {
    volume: 0.2,
    isMusicRunning: true
  }
}

export function PomodoreMusicPlayer(props: PomodoreMusicPlayerProps) {
  const [state, setState] = useState(initialState());

  const reactPlayerStyle: CSSProperties = {
    display: "none"
  }
  
  const onVolumeChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      volume: event.currentTarget.valueAsNumber
    })
  }

  const onMusicToggle = () => {
    setState({
      ...state,
      isMusicRunning: !state.isMusicRunning
    })
  }

  const url = props.isWorking ? props.workMusicUrl : props.pauseMusicUrl;
  const playing = props.isTimerRunning && state.isMusicRunning ? true : false

  return (
    <div className="PomodoreMusicPlayer">
      <input type="range" min="0" max="1" step={0.01} value={state.volume} onChange={onVolumeChange}></input>
      <button className="RoundButton RoundButtonWhite" onClick={onMusicToggle}>p</button>
      <ReactPlayer url={url} style={reactPlayerStyle} playing={playing}></ReactPlayer>
    </div>
  )
}