import { ICell } from "@/models/Cell"
import { useCoords } from "../coords"
import { useConfig } from "../config"
import { useCell } from "../cell"
import { useTheme } from "../theme"

export const useTable = () => {

  const { coords } = useCoords()
  const { piecePositions } = useConfig()
  const { setCells } = useCell()
  const { theme } = useTheme()

  const initCells = () => {
    const newCells: ICell[] = []
    let charArrIndex = 0
    let numIndex = 1
    const { charsArr, verticalCount } = coords
    const cellsCount = charsArr.length * verticalCount

    for (let i = 1; i <= cellsCount; i++) {
      const pos = `${charsArr[charArrIndex]}${numIndex}`
      const piece = {
        ...piecePositions.filter((piece) => piece.pos === pos)[0]
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
          lastMove: theme.lastMove
        },
        index: {
          top: charArrIndex === charsArr.length - 1 ? numIndex : "",
          bottom: numIndex === 1 ? charsArr[charArrIndex] : "",
        },
        attackedBy: []
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
    initCells,
  }
}
