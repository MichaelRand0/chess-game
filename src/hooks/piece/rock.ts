import { ICell } from "@/models/Cell"
import { useMove } from "../move"
import { useCell } from "../cell"

export const useRock = () => {
  const { checkMoves } = useMove()
  const { setMarkedCells, setSelectedCell } = useCell()

  const getMoves = (cell: ICell) => {
    return checkMoves(cell)
  }

  const onClick = (cell: ICell) => {
    const result = getMoves(cell)
    setSelectedCell(cell)
    setMarkedCells(result)
  }

  return {
    onClick,
    getMoves,
  }
}
