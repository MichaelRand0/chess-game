import { IPiece } from "./Piece"

export interface ICell {
  id: string
  piece: IPiece | null
  colors: {
    bg: string
    index: string
  }
  index?: {
    top?: string | number
    bottom?: string | number
  }
  size: number
}
