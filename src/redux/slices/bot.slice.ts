import bots from "@/bot/bots"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  bot: string
}

const initialState: IState = {
  bot: Object.entries(bots)[0][0]
}

export const botSlice = createSlice({
  name: "bot",
  initialState,
  reducers: {
    setBot(state, action: PayloadAction<string>) {
      state.bot = action.payload
    },
  },
})