import { ICell } from "@/models/Cell"
import { useCell } from "../cell"
import { useCoords } from "../coords"

export const useKing = () => {
  
  const {setSelectedCell, setMarkedCells} = useCell()
  const {getCellByCoords, getCoordsById} = useCoords()

  const onClick = (cell:ICell) => {
    const coords = getCoordsById(cell.id)
    let {x, y} = coords
    const moves = [
      getCellByCoords(x, y + 1),
      getCellByCoords(x, y - 1),
      getCellByCoords(x + 1, y),
      getCellByCoords(x - 1, y),
      getCellByCoords(x - 1, y - 1),
      getCellByCoords(x + 1, y + 1),
      getCellByCoords(x - 1, y + 1),
      getCellByCoords(x + 1, y - 1),
    ].filter(move => move && move?.piece?.side !== cell?.piece?.side)

    setMarkedCells(moves)
    setSelectedCell(cell)
  }

  return {
    onClick
  }
}