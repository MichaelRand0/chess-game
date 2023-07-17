import { ICell } from "@/models/Cell"
import { useMove } from "../move"
import { useCell } from "../cell"
import { Side } from "@/models/Piece"

export const useQueen = () => {
  const { getHorizontalMoves, getVerticalMoves, getDiagonalMoves } = useMove()
  const { cells, setSelectedCell, setMarkedCells } = useCell()

  const getMoves = (cell: ICell) => {
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
    return moves
  }

  const onClick = (cell: ICell) => {
    const moves = getMoves(cell)

    const fakeMoves = getHorizontalMoves(cell).concat(
      getVerticalMoves(cell),
      getDiagonalMoves(cell)
    )
    console.log("fakeMoves", fakeMoves)

    const verticalMoves = getVerticalMoves(cell)
    const horizontalMoves = getHorizontalMoves(cell)
    const diagonalMoves = getDiagonalMoves(cell)

    const result = diagonalMoves.concat(verticalMoves, horizontalMoves)
    setSelectedCell(cell)
    setMarkedCells(result)
  }

  return {
    onClick,
    getMoves,
  }
}
