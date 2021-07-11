import React, { useState } from "react"
import { PomodoreMusicPlayerState } from "../../interfaces/states/PomodoreMusicPlayerState"

const initialState = (): PomodoreMusicPlayerState => {
  return {
    volume: 0.2
  }
}

export function PomodoreMusicPlayer() {
  const [state, setState] = useState(initialState());
  
  const onVolumeChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      volume: event.currentTarget.valueAsNumber
    })
  }

  return (
    <div className="PomodoreMusicPlayer">
      <input type="range" min="0" max="1" step={0.01} value={state.volume} onChange={onVolumeChange}></input>
      <button className="RoundButton RoundButtonWhite">p</button>
    </div>
  )
}