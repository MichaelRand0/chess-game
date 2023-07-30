import { ICell } from "@/models/Cell"
import { useCoords } from "../coords"
import { useConfig } from "../config"
import { useCell } from "../cell"
import { useTheme } from "../theme"
import { usePlayer } from "../player"
import { useModal } from "../modal"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { gameSlice } from "@/redux/slices/game.slice"
import { useEffect, useState } from "react"
import { useStory } from "../story"
import { Side } from "@/models/Piece"
import { GameResult } from "@/models/Game"

export const useGame = () => {
  const dispatch = useDispatch()
  const storySelector = useSelector((state: RootState) => state.game)
  const actions = bindActionCreators({ ...gameSlice.actions }, dispatch)
  const { gameResult } = storySelector
  const { setGameResult } = actions

  const { coords } = useCoords()
  const { piecePositions } = useConfig()
  const { setCells } = useCell()
  const { theme } = useTheme()
  const { setPlayingSide, player, setPlayer, playingSide } = usePlayer()
  const { setCurrentModal } = useModal()
  const {setLastMoves} = useStory()

  const [result, setResult] = useState({
    message: '',
    reason: ''
  })

  useEffect(() => {
    setResult({
      message: gameResult?.winner === Side.white ? 'Белые победили!' : gameResult?.winner === 'Draw' ? 'Ничья' : 'Черные победили!',
      reason: gameResult?.reason === 'checkmate' ? 'Поставлен мат' : gameResult?.reason === 'surrender' ? 'Игрок сдался' : 'Закончились фигуры'
    })
  }, [gameResult])

  const stopGame = (gameResult: GameResult) => {
    setPlayingSide(null)
    setGameResult(gameResult)
    setCurrentModal('result')
  }

  const initCells = () => {
    const newCells: ICell[] = []
    let charArrIndex = 0
    let numIndex = 1
    const { charsArr, verticalCount } = coords
    const cellsCount = charsArr.length * verticalCount

    for (let i = 1; i <= cellsCount; i++) {
      const pos = `${charsArr[charArrIndex]}${numIndex}`
      const piece = {
        ...piecePositions.filter((piece) => piece.pos === pos)[0],
      }

      const bgColor =
        charArrIndex % 2 === 0
          ? numIndex % 2 === 0
            ? theme.cellBlack
            : theme.cellWhite
          : numIndex % 2 === 0
          ? theme.cellWhite
          : theme.cellBlack

      const indexColor =
        charArrIndex % 2 === 0
          ? numIndex % 2 === 0
            ? theme.cellWhite
            : theme.cellBlack
          : numIndex % 2 === 0
          ? theme.cellBlack
          : theme.cellWhite

      newCells.push({
        id: pos,
        piece: piece?.name ? piece : null,
        colors: {
          bg: bgColor,
          index: indexColor,
          hover: theme.hover,
          lastMove: theme.lastMove,
        },
        index: {
          top: charArrIndex === charsArr.length - 1 ? numIndex : "",
          bottom: numIndex === 1 ? charsArr[charArrIndex] : "",
        },
        attackedBy: [],
      })

      if (i % charsArr.length === 0) {
        numIndex++
      }

      if (charArrIndex === charsArr.length - 1) {
        charArrIndex = 0
      } else {
        charArrIndex++
      }
    }

    setCells(newCells.reverse())
  }

  const restartGame = () => {
    initCells()
    setCurrentModal(null)
    setLastMoves(null)
    setPlayingSide(Side.white)
    setPlayer({side: Side.white})
    setGameResult(null)
  }

  return {
    initCells,
    restartGame,
    result,
    stopGame,
    setGameResult,
  }
}
