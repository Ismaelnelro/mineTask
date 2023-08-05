import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { addNewTheme, setTheme } from "./themeActions";



export enum themeInitialState {
  Dark,
  Light
}

export const initialState: themeInitialState = themeInitialState.Dark;


export const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    onSetTheme: (state, payload: PayloadAction<themeInitialState>) => setTheme(state, payload),
    onAddNewTheme: (state, payload: PayloadAction<themeInitialState>) => addNewTheme(state, payload),
  }
})


export const { onSetTheme,onAddNewTheme } = taskSlice.actions
export default taskSlice.reducer