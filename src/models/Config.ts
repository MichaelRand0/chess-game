import { PieceNames, Side } from "./Piece"
export type PiecePosition = {
  name: PieceNames
  side: Side
  pos: string
  movesCount: number
}
export type PiecePositions = PiecePosition[]

export type Coords = {
  verticalCount: number
  charsArr: string[]
}
