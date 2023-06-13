import { ICell } from "@/models/Cell"
import { useConfig } from "../config"
import { PieceNames } from "@/models/Piece"
import { useCell } from "../cell"

export const checkMove = (cell: ICell) => {
  const {coords} = useConfig()
  const {setMarkedCells} = useCell()
  const {charsArr, verticalCount} = coords
  const {piece} = cell
  switch (piece?.name) {
    case PieceNames.pawn:
      if(piece?.movesCount === 0) {
        
      }
      break;
  
    default:
      break;
  }
}
