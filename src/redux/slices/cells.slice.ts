import { ICell } from "@/models/Cell"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  cells: ICell[]
  markedCells: ICell[]
  selectedCell: ICell | null
}

const initialState: IState = {
  cells: [],
  markedCells: [],
  selectedCell: null,
}

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    setCells(state, action: PayloadAction<ICell[]>) {
      state.cells = action.payload
    },
    setMarkedCells(state, action: PayloadAction<ICell[]>) {
      state.markedCells = action.payload
    },
    setSelectedCell(state, action: PayloadAction<ICell | null>) {
      state.selectedCell = action.payload
    },
  },
})
