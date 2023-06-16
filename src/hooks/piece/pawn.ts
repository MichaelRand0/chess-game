import { ICell } from "@/models/Cell"
import { useCoords } from "../coords"
import { Side } from "@/models/Piece"
import { useCell } from "../cell"
import { useMove } from "../move"

export const usePawn = () => {
  const { getCellByCoords, getCoordsById } = useCoords()
  const { setSelectedCell, setMarkedCells } = useCell()
  const { checkMoves } = useMove()

  const onClick = (cell: ICell) => {
    setSelectedCell(cell)
    const { x, y } = getCoordsById(cell.id)
    const piece = cell?.piece

    let moves = []
    let attackMoves = []
    const movesCount = piece?.movesCount
    const isWhite = piece?.side === Side.white
    moves = isWhite
      ? movesCount === 0
        ? [getCellByCoords(x, y + 1), getCellByCoords(x, y + 2)]
        : [getCellByCoords(x, y + 1)]
      : movesCount === 0
      ? [getCellByCoords(x, y - 1), getCellByCoords(x, y - 2)]
      : [getCellByCoords(x, y - 1)]
    attackMoves = isWhite
      ? [getCellByCoords(x - 1, y + 1), getCellByCoords(x + 1, y + 1)]
      : [getCellByCoords(x - 1, y - 1), getCellByCoords(x + 1, y - 1)]
    attackMoves = attackMoves.filter(
      (move) => move?.piece && move?.piece?.side !== piece?.side
    )
    moves = checkMoves(cell, moves)
    const resultMoves = moves.concat(attackMoves)
    setMarkedCells(resultMoves)
    setSelectedCell(cell)
  }

  return {
    onClick,
  }
}
