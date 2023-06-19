import { playerSlice } from "@/redux/slices/player.slice"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

export const usePlayer = () => {
  const dispatch = useDispatch()
  const playerSelector = useSelector((state: RootState) => state.player)
  const { player, playingSide } = playerSelector
  const actions = bindActionCreators({ ...playerSlice.actions }, dispatch)
  const { togglePlayingSide } = actions

  return {
    player,
    playingSide,
    togglePlayingSide,
  }
}
