import { Side } from "@/models/Piece"
import { playerSlice } from "@/redux/slices/player.slice"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

export const usePlayer = () => {
  const dispatch = useDispatch()
  const playerSelector = useSelector((state: RootState) => state.player)
  const { player, playingSide } = playerSelector
  const actions = bindActionCreators({ ...playerSlice.actions }, dispatch)
  const { setPlayingSide, setPlayer } = actions

  const togglePlayingSide = () => {
    const side = playingSide === Side.white ? Side.black : Side.white
    setPlayingSide(side)
    setPlayer({
      side,
    })
  }

  return {
    player,
    playingSide,
    setPlayingSide,
    togglePlayingSide,
    setPlayer,
  }
}
