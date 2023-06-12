import { initPositions } from "@/data/initPositions"
import { PiecePositions } from "@/models/Config"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"


    // white: {
    //   pawn: ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    //   rock: ["a1", "h1"],
    //   knight: ["b1", "g1"],
    //   bishop: ["c1", "f1"],
    //   king: ["e1"],
    //   queen: ["d1"],
    // },
    // black: {
    //   pawn: ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    //   rock: ["a8", "h8"],
    //   knight: ["b8", "g8"],
    //   bishop: ["c8", "f8"],
    //   king: ["e8"],
    //   queen: ["d8"],
    // },

interface IState {
  piecePositions: PiecePositions
}

const initialState: IState = {
  piecePositions: initPositions
}

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setPositions(state, action: PayloadAction<PiecePositions>) {
      state.piecePositions = action.payload
    },
  },
})
