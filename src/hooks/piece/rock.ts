import { ICell } from "@/models/Cell"
import { useMove } from "../move"
import { useCell } from "../cell"
import { Side } from "@/models/Piece"

export const useRock = () => {
  const { checkMoves } = useMove()
  const { setMarkedCells, cells, setSelectedCell } = useCell()

  const onClick = (cell: ICell) => {
    const splittedId = cell.id.split("")
    const char = splittedId[0]
    const num = splittedId[1]
    let moves = cells.filter((item) => {
      const itemChar = item.id.split("")[0]
      const itemNum = item.id.split("")[1]
      return char === itemChar || num === itemNum
    })
    if(cell?.piece?.side === Side.white) {
      moves = moves.reverse()
    }
    const result = checkMoves(cell, moves)
    setSelectedCell(cell)
    setMarkedCells(result)
  }

  return {
    onClick,
  }
}
