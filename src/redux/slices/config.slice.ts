import { initCoords } from "@/data/coords"
import { initPositions } from "@/data/initPositions"
import { Coords, PiecePositions } from "@/models/Config"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  piecePositions: PiecePositions
  coords: Coords
}

const initialState: IState = {
  piecePositions: initPositions,
  coords: initCoords
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
