import { PieceNames } from "@/models/Piece"
import { usePawn } from "./pawn"
import { useKnight } from "./knight"
import { useBishop } from "./bishop"
import { useRock } from "./rock"

export const usePiece = () => {
  const pawn = usePawn()
  const knight = useKnight()
  const bishop = useBishop()
  const rock = useRock()
  const getPiece = (name: PieceNames) => {
    switch (name) {
      case PieceNames.pawn:
        return pawn
      case PieceNames.knight:
        return knight
      case PieceNames.bishop:
        return bishop
      case PieceNames.rock:
        return rock

      default:
        break
    }
  }

  return {
    getPiece,
  }
}
