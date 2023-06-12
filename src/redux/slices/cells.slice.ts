import { ICell } from "@/models/Cell"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  cells: ICell[]
}

const initialState: IState = {
  cells: [],
}

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    setCells(state, action: PayloadAction<ICell[]>) {
      state.cells = action.payload
    },
  },
})
