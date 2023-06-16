import { PieceNames } from "@/models/Piece"
import { usePawn } from "./pawn"
import { useKnight } from "./knight"

export const usePiece = () => {
  const pawn = usePawn()
  const knight = useKnight()
  const getPiece = (name: PieceNames) => {
    switch (name) {
      case PieceNames.pawn:
        return pawn
      case PieceNames.knight:
        return knight

      default:
        break
    }
  }

  return {
    getPiece,
  }
}
