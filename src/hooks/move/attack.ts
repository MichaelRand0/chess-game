import { PieceNames, Side } from "@/models/Piece"
import { useCell } from "../cell"
import { usePiece } from "../piece"
import { ICell } from "@/models/Cell"

export const useAttack = () => {
  const { cells } = useCell()
  const { getPiece } = usePiece()

  const updateAttackedCells = () => {
    let newCells = [...cells]
    cells.forEach((cell) => {
      const piece = cell?.piece
      if (piece) {
        const name = piece.name
        const pieceLogic = getPiece(name)
        const isPawn = name === PieceNames.pawn

        const { getAttackMoves, getMoves } = pieceLogic
        if (getAttackMoves || getMoves) {
          let moves = getAttackMoves ? getAttackMoves(cell) : getMoves(cell)
          // console.log('piece', piece)
          // console.log('moves', moves)
          moves = moves.filter((move) => move)
          // console.log("moves", moves)
          // console.log("cell", cell)
          moves.forEach((move) => {
            newCells = newCells.map((newCell) => {
              if (move.id === newCell.id) {
                return {
                  ...move,
                  attackedBy: [
                    ...new Set([...newCell.attackedBy, cell?.id]),
                  ],
                }
              } else {
                return newCell
              }
            })
          })
        }
      }
    })
    console.log("newCells", newCells)
  }

  const returnCheckedKings = (cells: ICell[]) => {
    const whiteKing = cells.filter(
      (cell) =>
        cell?.piece?.name === PieceNames.king &&
        cell?.piece?.side === Side.white
    )[0]
    const blackKing = cells.filter(
      (cell) =>
        cell?.piece?.name === PieceNames.king &&
        cell?.piece?.side === Side.black
    )[0]
  }

  return {
    updateAttackedCells,
    returnCheckedKings,
  }
}
