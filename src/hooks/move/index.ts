import { ICell } from "@/models/Cell"
import { useCell } from "../cell"
import { PieceNames, Side } from "@/models/Piece"
import { useCoords } from "../coords"

export const useMove = () => {
  const { coords } = useCoords()

  const checkMoves = (cell: ICell, cells: ICell[]) => {
    const { piece } = cell
    const splittedCoord = cell.id.split("")
    const { charsArr } = coords
    const char = splittedCoord[0]
    const charIndex = charsArr.indexOf(char)
    const num = Number(splittedCoord[1])
    let resultMoves: string[] = []
    switch (piece?.name) {
      case PieceNames.pawn:
        const moves =
          piece?.movesCount !== 0
            ? piece.side === Side.white
              ? [char + (num + 1)]
              : [char + (num - 1)]
            : piece.side === Side.white
            ? [char + (num + 1), char + (num + 2)]
            : [char + (num - 1), char + (num - 2)]
        let attackMoves: any[] =
          piece.side === Side.white
            ? [
                charsArr[charIndex - 1] + (num + 1),
                charsArr[charIndex + 1] + (num + 1),
              ]
            : [
                charsArr[charIndex - 1] + (num - 1),
                charsArr[charIndex + 1] + (num - 1),
              ]
        attackMoves = attackMoves.map((item) => {
          const cell = cells.filter((cell) => cell.id === item)[0]
          if (cell?.piece && cell?.piece?.side !== piece?.side) {
            return item
          }
        })
        resultMoves = moves.concat(attackMoves).filter((move) => move)

      default:
        break
    }
    return resultMoves
  }
  return {
    checkMoves,
  }
}
