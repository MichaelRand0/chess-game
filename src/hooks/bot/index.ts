import getRandom from "@/helpers/getRandom"
import { useCell } from "../cell"
import { useMove } from "../move"
import { usePlayer } from "../player"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { botSlice } from "@/redux/slices/bot.slice"

export const useBot = () => {
  const dispatch = useDispatch()
  const storySelector = useSelector((state: RootState) => state.bot)
  const actions = bindActionCreators({ ...botSlice.actions }, dispatch)
  const { bot } = storySelector
  const { setBot } = actions
  const { cells } = useCell()
  const { getMoves, filterCheckMoves, movePiece } = useMove()
  const { player, togglePlayingSide } = usePlayer()

  const randomMove = () => {
    const botPieces: any = cells
      .filter((cell) => cell?.piece && cell?.piece?.side !== player?.side)
      .map((cell) => {
        const moves = filterCheckMoves(cell, getMoves(cell).moves)
        if (moves.length > 0) {
          return cell
        }
      })
      .filter((cell) => cell)
    const randomPiece = botPieces[getRandom(botPieces.length)]
    const moves = filterCheckMoves(randomPiece, getMoves(randomPiece).moves)
    const randomMove = moves[getRandom(moves.length)]
    if (randomPiece && randomMove) {
      movePiece(randomPiece, randomMove)
      togglePlayingSide()
    }
  }

  return {
    randomMove,
    bot,
    setBot,
  }
}
