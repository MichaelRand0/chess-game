import { ICell } from "@/models/Cell"
import { useCell } from "../cell"
import { PieceNames, Side } from "@/models/Piece"
import { useConfig } from "../config"

export const useMove = () => {
  const { cells } = useCell()
  const { coords } = useConfig()

  const getMoves = (cell: ICell) => {
    const { piece } = cell
    const splittedCoord = cell.id.split("")
    const { charsArr } = coords
    const char = splittedCoord[0]
    const charIndex = charsArr.indexOf(char)
    const num = Number(splittedCoord[1])
    switch (piece?.name) {
      case PieceNames.pawn:
        const moves =
          piece.side === Side.white
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
        const resultMoves = moves.concat(attackMoves).filter((move) => move)
        return resultMoves

      default:
        break
    }
  }
  return {
    getMoves,
  }
}
