import { useState } from "react";

export const loadLocalStorageState = <StateType>(key: string, initialState: StateType): StateType => {

  const localStorageState: any = localStorage.getItem(key)

  if(localStorageState) {
    return JSON.parse(localStorageState);
  }

  localStorage.setItem(key, JSON.stringify(initialState));
  return initialState;
}

export const useLocalStorageState = <StateType>(initialState: StateType, localStorageName: string): [StateType, (state: StateType) => void] => {
  const [state, setState] = useState(initialState);

  return [state, (state: StateType) => {
    localStorage.setItem(localStorageName, JSON.stringify(state));
    setState(state);
  }];
}