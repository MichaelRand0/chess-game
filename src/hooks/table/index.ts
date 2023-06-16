import { ICell } from "@/models/Cell"
import { useEffect, useState } from "react"
import { useCoords } from "../coords"
import { useConfig } from "../config"
import { useCell } from "../cell"
import { useTheme } from "../theme"
import { usePiece } from "../piece"

export const useTable = () => {
  const [cellSize, setCellSize] = useState(0)

  const { coords } = useCoords()
  const { piecePositions } = useConfig()
  const { markedCells, setCells, selectedCell } = useCell()
  const { theme } = useTheme()
  const { getPiece } = usePiece()

  useEffect(() => {
    const width = window.screen.width
    setCellSize(width * 0.45 * 0.125)
  }, [])

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
        size: cellSize * 0.7,
      }
      const pieceLogic = getPiece(piece.name)
      const onClick = pieceLogic?.onClick

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
          hover: theme.hover
        },
        index: {
          top: charArrIndex === charsArr.length - 1 ? numIndex : "",
          bottom: numIndex === 1 ? charsArr[charArrIndex] : "",
        },
        size: cellSize,
        onClick,
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

  return {
    cellSize,
    initCells,
  }
}
