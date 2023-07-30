import { GameResult } from "@/models/Game"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  gameResult: GameResult
}

const initialState: IState = {
  gameResult: null,
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameResult(state, action: PayloadAction<GameResult>) {
      state.gameResult = action.payload
    },
  },
})
