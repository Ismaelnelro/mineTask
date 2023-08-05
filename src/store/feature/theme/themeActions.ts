import { PayloadAction } from "@reduxjs/toolkit";
import { themeInitialState } from "./themeSlice";


function setTheme(state: themeInitialState, { payload }: PayloadAction<themeInitialState>) {
}
function addNewTheme(state: themeInitialState, { payload }: PayloadAction<themeInitialState>) {
}


export {
  setTheme,
  addNewTheme,
}