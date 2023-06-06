import { ThemeName } from "@/hooks/theme/types"
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface themeState {
  theme: ThemeName
}

const initialState: themeState = {
  theme: ThemeName.default
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state:themeState, payload:PayloadAction<ThemeName>) {
      state.theme = payload.payload
    }
  }
})