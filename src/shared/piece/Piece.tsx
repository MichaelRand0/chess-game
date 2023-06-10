import { IPiece, PieceNames, Side } from "@/models/Piece"
import Pawn from "./figures/Pawn"
import King from "./figures/King"
import Queen from "./figures/Queen"
import Knight from "./figures/Knight"
import Bishop from "./figures/Bishop"
import Rock from "./figures/Rock"
import { useTheme } from "@/hooks/theme"

const Piece = (props: IPiece) => {
  const { name, size, side } = props
  const { theme } = useTheme()
  const colorTheme = side === Side.white ? theme.white : theme.black
  const Figure =
    name === PieceNames.pawn
      ? Pawn
      : name === PieceNames.king
      ? King
      : PieceNames.queen
      ? Queen
      : PieceNames.knight
      ? Knight
      : PieceNames.bishop
      ? Bishop
      : Rock
  return (
    <div>
      <Figure colorTheme={colorTheme} size={size} />
    </div>
  )
}

export default Piece
