import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './slices/theme.slice'
import { cellsSlice } from './slices/cells.slice'
import { configSlice } from './slices/config.slice'
import { playerSlice } from './slices/player.slice'
import { storySlice } from './slices/story.slice'
import { modalSlice } from './slices/modal.slice'
import { gameSlice } from './slices/game.slice'
import { botSlice } from './slices/bot.slice'

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    cells: cellsSlice.reducer,
    config: configSlice.reducer,
    player: playerSlice.reducer,
    story: storySlice.reducer,
    modal: modalSlice.reducer,
    game: gameSlice.reducer,
    bot: botSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch