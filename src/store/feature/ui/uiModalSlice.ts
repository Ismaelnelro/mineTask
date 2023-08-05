import { createSlice } from "@reduxjs/toolkit";

interface ModalInitialState {
  isOpen: boolean;
}

const initialState: ModalInitialState = {
  isOpen: false
}


export const uiModalSlice = createSlice({
  name: "Modal",
  initialState: initialState,
  reducers: {
    setOpenModal: (state) => { state.isOpen = true },
    setHideModal: (state) => { state.isOpen = false }
  }

})

export default uiModalSlice.reducer;
export const { setOpenModal, setHideModal } = uiModalSlice.actions;