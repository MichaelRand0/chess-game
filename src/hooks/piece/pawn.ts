import { ICell } from "@/models/Cell"
import { useCoords } from "../coords"
import { Side } from "@/models/Piece"

export const usePawn = () => {
  const { getCellByCoords, getCoordsById } = useCoords()

  const onClick = (cell: ICell) => {
    const { x, y } = getCoordsById(cell.id)
    const piece = cell?.piece

    let moves = []
    let attackMoves = []
    const isWhite = piece?.side === Side.white
    moves = isWhite
      ? [getCellByCoords(x, y + 1), getCellByCoords(x, y + 2)]
      : [getCellByCoords(x, y - 1), getCellByCoords(x, y - 2)]
    attackMoves = isWhite
      ? [getCellByCoords(x - 1, y + 1), getCellByCoords(x + 1, y + 1)]
      : [getCellByCoords(x - 1, y - 1), getCellByCoords(x + 1, y - 1)]
    attackMoves = attackMoves.filter(
      (move) => move?.piece && move?.piece?.side !== piece?.side
    )
    const resultMoves = moves.concat(attackMoves)
    console.log("resultMoves", resultMoves)
  }

  return {
    onClick,
  }
}
