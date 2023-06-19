import { LastMoves } from "@/models/Story"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  lastMoves: LastMoves
}

const initialState: IState = {
  lastMoves: null,
}

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    setLastMoves(state, action: PayloadAction<LastMoves>) {
      state.lastMoves = action.payload
    },
  },
})
