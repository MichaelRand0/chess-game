import { ICell } from "@/models/Cell"
import { useMove } from "../move"
import { useCell } from "../cell"
import { Side } from "@/models/Piece"

export const useQueen = () => {
  const { checkDiagonal, checkHorizontal, checkVertical } = useMove()
  const { cells, setSelectedCell, setMarkedCells } = useCell()

  const onClick = (cell: ICell) => {
    const splittedId = cell.id.split("")
    const char = splittedId[0]
    const num = splittedId[1]

    let moves = cells.filter((item) => {
      const itemChar = item.id.split("")[0]
      const itemNum = item.id.split("")[1]
      return char === itemChar || num === itemNum
    })

    if (cell?.piece?.side === Side.white) {
      moves = moves.reverse()
    }

    const verticalMoves = checkVertical(cell, moves)
    const horizontalMoves = checkHorizontal(cell, moves)
    const diagonalMoves = checkDiagonal(cell)

    const result = diagonalMoves.concat(verticalMoves, horizontalMoves)
    setSelectedCell(cell)
    setMarkedCells(result)
  }

  return {
    onClick,
  }
}
