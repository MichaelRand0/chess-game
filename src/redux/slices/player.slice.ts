import { Side } from "@/models/Piece"
import { createSlice } from "@reduxjs/toolkit"

interface IState {
  player: {
    side: Side
  }
  playingSide: Side
}

const initialState: IState = {
  player: {
    side: Side.white,
  },
  playingSide: Side.white,
}

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    togglePlayingSide(state) {
      state.playingSide =
        state.playingSide === Side.white ? Side.black : Side.white
    },
  },
})
