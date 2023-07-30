import { Side } from "@/models/Piece"
import { Player, PlayingSide } from "@/models/Player"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  player: Player
  playingSide: PlayingSide
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
    setPlayingSide(state, action: PayloadAction<PlayingSide>) {
      state.playingSide = action.payload
    },
    setPlayer(state, action: PayloadAction<Player>) {
      state.player = action.payload
    },
  },
})
