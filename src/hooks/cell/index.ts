import { useEffect } from "react"
import { useTheme } from "../theme"
import { ICell } from "@/models/Cell"
import { useTable } from "../table"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { cellsSlice } from "@/redux/slices/cells.slice"
import { useConfig } from "../config"
import { PiecePositions } from "@/models/Config"

export const useCell = () => {
  const dispatch = useDispatch()
  const { piecePositions } = useConfig()
  const cellsSelector = useSelector((state: RootState) => state.cells)
  const { cells } = cellsSelector
  const actions = bindActionCreators(
    {
      ...cellsSlice.actions,
    },
    dispatch
  )
  const { setCells } = actions
  const { theme } = useTheme()
  const { cellSize } = useTable()
  const charArr = ["a", "b", "c", "d", "e", "f", "g", "h"].reverse()
  const initCells = () => {
    const newCells: ICell[] = []
    let charArrIndex = 0
    let numIndex = 1
    for (let i = 1; i <= 64; i++) {
      // const side = charIndex === 6 || charIndex === 7 ? Side.white : Side.black
      const pos = `${charArr[charArrIndex]}${numIndex}`
      console.log("pos", pos)
      const piece = {
        ...piecePositions.filter((piece) => piece.pos === pos)[0],
        size: cellSize * 0.75,
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
        },
        index: {
          top: charArrIndex === 7 ? numIndex : "",
          bottom: numIndex === 1 ? charArr[charArrIndex] : "",
        },
        size: cellSize,
      })
      if (i % 8 === 0) {
        numIndex++
      }
      if (charArrIndex === 7) {
        charArrIndex = 0
      } else {
        charArrIndex++
      }
    }
    setCells(newCells.reverse())
  }
  useEffect(() => {
    if (cellSize > 0) {
      initCells()
    }
  }, [cellSize])
  const initPieces = (arr: PiecePositions) => {}
  useEffect(() => {
    if (cells.length > 0) {
    }
  }, [cells])
  return {
    cells,
  }
}
