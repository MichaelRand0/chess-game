import { IAttackedCell, ICell } from "@/models/Cell"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  cells: ICell[]
  markedCells: ICell[]
  selectedCell: ICell | null
  attackedCells: IAttackedCell[]
}

const initialState: IState = {
  cells: [],
  markedCells: [],
  selectedCell: null,
  attackedCells: [],
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
    setAttackedCells(state, action: PayloadAction<IAttackedCell[]>) {
      state.attackedCells = action.payload
    },
  },
})
