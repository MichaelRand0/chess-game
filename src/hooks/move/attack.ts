import { PieceNames, Side } from "@/models/Piece"
import { ICell } from "@/models/Cell"
import { useMove } from "."

export const useAttack = () => {
  const { getMoves } = useMove()

  // const getAttackedCells = (cells: ICell[]) => {
  //   let newCells = [...cells]
  //   cells.forEach((cell) => {
  //     const piece = cell?.piece
  //     if (piece) {
  //       const name = piece.name
  //       const isPawn = name === PieceNames.pawn
  //       const { moves: initMoves, attackMoves } = getMoves(cell)
  //       let moves = isPawn ? attackMoves : attackMoves ? attackMoves : initMoves
  //       if (moves) {
  //         moves = moves.filter((move) => move)
  //         moves.forEach((move) => {
  //           newCells = newCells.map((newCell: any) => {
  //             if (move.id === newCell.id) {
  //               return {
  //                 ...move,
  //                 attackedBy: [...new Set([...newCell.attackedBy, cell?.id])],
  //               }
  //             } else {
  //               return newCell
  //             }
  //           })
  //         })
  //       }
  //     }
  //   })
  //   return newCells.filter((item) => item?.attackedBy?.length > 0)
  // }

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
    // getAttackedCells,
    returnCheckedKings,
  }
}
