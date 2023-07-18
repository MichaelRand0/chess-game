import { ICell } from "@/models/Cell"
import { useMove } from "../move"
import { useCell } from "../cell"

export const useBishop = () => {
  const { checkMoves } = useMove()
  const { setMarkedCells, setSelectedCell } = useCell()

  const getMoves = (cell: ICell) => {
    return checkMoves(cell)
  }

  const onClick = (cell: ICell) => {
    const moves = getMoves(cell)
    setSelectedCell(cell)
    setMarkedCells(moves)
  }

  return {
    onClick,
    getMoves,
  }
}
