import { ModalName } from "@/models/Modal"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  currentModal: ModalName
}

const initialState: IState = {
  currentModal: null,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCurrentModal(state, action: PayloadAction<ModalName>) {
      state.currentModal = action.payload
    },
  },
})
