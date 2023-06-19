import { PieceNames } from "@/models/Piece"
import { usePawn } from "./pawn"
import { useKnight } from "./knight"
import { useBishop } from "./bishop"
import { useRock } from "./rock"
import { useQueen } from "./queen"
import { useKing } from "./king"
import { ICell } from "@/models/Cell"
import { useMove } from "../move"
import { useCell } from "../cell"
import { usePlayer } from "../player"

export const usePiece = () => {
  const pawn = usePawn()
  const knight = useKnight()
  const bishop = useBishop()
  const rock = useRock()
  const queen = useQueen()
  const king = useKing()

  const { movePiece } = useMove()
  const { setSelectedCell, setMarkedCells, selectedCell, markedCells } =
    useCell()
  const { player, playingSide } = usePlayer()

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
      case PieceNames.queen:
        return queen
      case PieceNames.king:
        return king

      default:
        break
    }
  }

  const pieceHandler = (cell: ICell) => {
    if (player.side === playingSide) {
      const piece = cell?.piece
      if (selectedCell?.id === cell.id) {
        setSelectedCell(null)
        setMarkedCells([])
      } else {
        if (cell?.piece?.side === player.side && piece) {
          const pieceLogic = getPiece(piece?.name)
          pieceLogic?.onClick(cell)
        } else {
          if (
            markedCells.some((item) => item.id === cell?.id) &&
            selectedCell
          ) {
            movePiece(selectedCell, cell)
          }
        }
      }
    }
  }

  return {
    getPiece,
    pieceHandler,
  }
}
