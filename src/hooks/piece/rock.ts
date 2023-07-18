import { ICell } from "@/models/Cell"
import { useMove } from "../move"
import { useCell } from "../cell"

export const useRock = () => {
  const { checkMoves } = useMove()
  const { setMarkedCells, setSelectedCell } = useCell()

  const onClick = (cell: ICell) => {
    const result = checkMoves(cell)
    setSelectedCell(cell)
    setMarkedCells(result)
  }

  return {
    onClick,
  }
}
