import { ICell } from "@/models/Cell"
import { useCoords } from "../coords"
import { Side } from "@/models/Piece"
import { useCell } from "../cell"
import { useMove } from "../move"

export const usePawn = () => {
  const { getCellByCoords, getCoordsById } = useCoords()
  const { setSelectedCell, setMarkedCells } = useCell()
  const { checkMoves } = useMove()

  const getMoves = (cell: ICell) => {
    const { x, y } = getCoordsById(cell.id)
    const piece = cell?.piece
    let moves = []
    const movesCount = piece?.movesCount
    const isWhite = piece?.side === Side.white
    moves = isWhite
      ? movesCount === 0
        ? [getCellByCoords(x, y + 1), getCellByCoords(x, y + 2)]
        : [getCellByCoords(x, y + 1)]
      : movesCount === 0
      ? [getCellByCoords(x, y - 1), getCellByCoords(x, y - 2)]
      : [getCellByCoords(x, y - 1)]
    moves = checkMoves(cell)
    return moves
  }

  const getAttackMoves = (cell: ICell) => {
    const { x, y } = getCoordsById(cell.id)
    const piece = cell?.piece
    let moves = []
    const isWhite = piece?.side === Side.white
    moves = moves = isWhite
      ? [getCellByCoords(x - 1, y + 1), getCellByCoords(x + 1, y + 1)]
      : [getCellByCoords(x - 1, y - 1), getCellByCoords(x + 1, y - 1)]
    return moves
  }

  const onClick = (cell: ICell) => {
    setSelectedCell(cell)
    const filteredAttackMoves = getAttackMoves(cell).filter(
      (move) => move?.piece && move?.piece?.side !== cell?.piece?.side
    )
    const resultMoves = getMoves(cell).concat(filteredAttackMoves)
    setMarkedCells(resultMoves)
    setSelectedCell(cell)
  }

  return {
    onClick,
    getMoves,
    getAttackMoves
  }
}
