import { ICell } from "@/models/Cell"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  cells: ICell[]
  markedCells: string[]
}

const initialState: IState = {
  cells: [],
  markedCells: []
}

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    setCells(state, action: PayloadAction<ICell[]>) {
      state.cells = action.payload
    },
    setMarkedCells(state, action: PayloadAction<string[]>) {
      state.markedCells = action.payload
    },
  },
})
