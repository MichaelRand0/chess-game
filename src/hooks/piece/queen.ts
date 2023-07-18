import { ICell } from "@/models/Cell"
import { useMove } from "../move"
import { useCell } from "../cell"

export const useQueen = () => {
  const { getHorizontalMoves, getVerticalMoves, getDiagonalMoves } = useMove()
  const { cells, setSelectedCell, setMarkedCells } = useCell()

  const getMoves = (cell: ICell) => {
    const verticalMoves = getVerticalMoves(cell)
    const horizontalMoves = getHorizontalMoves(cell)
    const diagonalMoves = getDiagonalMoves(cell)

    const result = diagonalMoves.concat(verticalMoves, horizontalMoves)
    return result
  }

  const onClick = (cell: ICell) => {

    const fakeMoves = getMoves(cell)
    console.log("fakeMoves", fakeMoves)
    const result = getMoves(cell)
    setSelectedCell(cell)
    setMarkedCells(result)
  }

  return {
    onClick,
    getMoves,
  }
}
