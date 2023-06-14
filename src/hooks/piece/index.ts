import { PieceNames } from "@/models/Piece"
import { usePawn } from "./pawn"

export const usePiece = () => {
  const pawn = usePawn()
  const getPiece = (name: PieceNames) => {
    switch (name) {
      case PieceNames.pawn:
        return pawn

      default:
        break
    }
  }

  return {
    getPiece,
  }
}
