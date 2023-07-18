import { ICell } from "@/models/Cell"
import { useCoords } from "../coords"
import { useCell } from "../cell"

export const useKnight = () => {
  const { setMarkedCells, setSelectedCell } = useCell()
  const { getCellByCoords, coords } = useCoords()
  const { charsArr } = coords
  const getMoves = (cell: ICell) => {
    const coords = [
      {
        y: 2,
        x: -1,
      },
      {
        y: 2,
        x: 1,
      },
      {
        y: -2,
        x: -1,
      },
      {
        y: -2,
        x: 1,
      },
      {
        y: 1,
        x: -2,
      },
      {
        y: 1,
        x: 2,
      },
      {
        y: -1,
        x: 2,
      },
      {
        y: -1,
        x: -2,
      },
    ]
    const id = cell.id
    const char = id.split("")[0]
    const num = Number(id.split("")[1])
    const indexOfChar = charsArr.indexOf(char)
    let result: ICell[] = []
    coords.forEach((coord) => {
      result.push(getCellByCoords(indexOfChar + coord.x, num + coord.y))
    })
    result = result.filter(
      (item) => item && item?.piece?.side !== cell.piece?.side
    )
    return result
  }
  const onClick = (cell: ICell) => {
    const result = getMoves(cell)
    setMarkedCells(result)
    setSelectedCell(cell)
  }

  return {
    onClick,
    getMoves,
  }
}
