import { PieceNames } from "./Piece"

export type Size = {
  cellSize: number
  pieceSize: number
}

export interface ICell {
  id: string
  piece: PieceNames
  colors: {
    bg: string
    index: string
  }
  index?: {
    top?: string | number
    bottom?: string | number
  }
  size: Size
}
