import { PieceNames, Side } from "./Piece"
export type PiecePosition = {
  name: PieceNames
  side: Side
  pos: string
}
export type PiecePositions = PiecePosition[]
