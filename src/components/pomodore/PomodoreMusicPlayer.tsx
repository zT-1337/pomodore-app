import React, { CSSProperties } from "react"
import { PomodoreMusicPlayerState } from "../../interfaces/states/PomodoreMusicPlayerState"
import ReactPlayer from "react-player";
import { PomodoreMusicPlayerProps } from "../../interfaces/props/pomodore/PomodoreMusicPlayerProps";
import { loadLocalStorageState, useLocalStorageState } from "../../utils/LocalStorageState";

const PomodoreMusicPlayerLocalStorage = "PomodoreMusicPlayerLocalStorage";

const initialState = (): PomodoreMusicPlayerState => {
  return loadLocalStorageState(
    PomodoreMusicPlayerLocalStorage, 
    {
      volume: 0.2,
      isWorkVideoVisible: false,
      isPauseVideoVisible: false
    }
  );
}

export function PomodoreMusicPlayer(props: PomodoreMusicPlayerProps) {
  const [state, setState] = useLocalStorageState(initialState(), PomodoreMusicPlayerLocalStorage);

  const videoHeightInPx = 180;
  const videoWidthInPx = 320;

  const invisibleVideoStyle: CSSProperties = {
    position: "absolute",
    zIndex: -100
  }
  
  const visibleVideoStyle: CSSProperties = {
    position: "relative",
    top: -1 * (videoHeightInPx - 50),
    marginRight: 20
  }

  const onVolumeChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      volume: event.currentTarget.valueAsNumber
    })
  }

  const onWorkVideoVisibilityToggle = () => {
    setState({
      ...state,
      isWorkVideoVisible: !state.isWorkVideoVisible
    })
  }

  const onPauseVideoVisibilityToggle = () => {
    setState({
      ...state,
      isPauseVideoVisible: !state.isPauseVideoVisible
    })
  }

  const playingWorkMusic = props.isTimerRunning && props.isWorking
  const playingPauseMusic = props.isTimerRunning && !props.isWorking

  return (
    <div className="PomodoreMusicPlayer">
      <input type="range" min="0" max="1" step={0.01} value={state.volume} onChange={onVolumeChange}></input>
      <button className="RoundButton RoundButtonWhite" onClick={onWorkVideoVisibilityToggle}>v</button>
      <ReactPlayer  url={props.workMusicUrl} 
                    style={state.isWorkVideoVisible ? visibleVideoStyle : invisibleVideoStyle} 
                    playing={playingWorkMusic} 
                    loop={true} 
                    volume={state.volume} 
                    width={videoWidthInPx} 
                    height={videoHeightInPx}></ReactPlayer>
      <button className="RoundButton RoundButtonWhite" onClick={onPauseVideoVisibilityToggle}>v</button>
      <ReactPlayer  url={props.pauseMusicUrl} 
                    style={state.isPauseVideoVisible ? visibleVideoStyle : invisibleVideoStyle} 
                    playing={playingPauseMusic} 
                    loop={true} 
                    volume={state.volume}
                    width={videoWidthInPx}
                    height={videoHeightInPx}></ReactPlayer>
    </div>
  )
}