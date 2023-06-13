import { useEffect } from "react"
import { useTheme } from "../theme"
import { ICell } from "@/models/Cell"
import { useTable } from "../table"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { cellsSlice } from "@/redux/slices/cells.slice"
import { useConfig } from "../config"

export const useCell = () => {
  const dispatch = useDispatch()
  const { piecePositions, coords } = useConfig()
  const cellsSelector = useSelector((state: RootState) => state.cells)
  const { cells, markedCells } = cellsSelector
  const actions = bindActionCreators(
    {
      ...cellsSlice.actions,
    },
    dispatch
  )
  const { setCells, setMarkedCells } = actions
  const { theme } = useTheme()
  const { cellSize } = useTable()
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
        size: cellSize * 0.75,
      }

      const bgColor = markedCells.filter((id) => id === pos)?.[0]
        ? "#0cf54e"
        : charArrIndex % 2 === 0
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
          top: charArrIndex === charsArr.length - 1 ? numIndex : "",
          bottom: numIndex === 1 ? charsArr[charArrIndex] : "",
        },
        size: cellSize,
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

  useEffect(() => {
    if (cellSize > 0) {
      initCells()
    }
  }, [cellSize])

  useEffect(() => {
    if (cells.length > 0) {
    }
  }, [cells])

  return {
    cells,
    setCells,
    setMarkedCells,
  }
}
