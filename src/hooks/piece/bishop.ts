import { ICell } from "@/models/Cell"
import { useMove } from "../move"
import { useCell } from "../cell"

export const useBishop = () => {

  const {checkDiagonal} = useMove()
  const {setMarkedCells, setSelectedCell} = useCell()

  const onClick = (cell:ICell) => {
    const moves = checkDiagonal(cell)
    setSelectedCell(cell)
    setMarkedCells(moves)
  }

  return {
    onClick
  }
}