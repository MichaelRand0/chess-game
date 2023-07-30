import { Side } from "./Piece"

type Result = Side | 'Draw'

type EndReason = "checkmate" | "no pieces" | "surrender"

export type GameResult = {
  winner: Result
  reason: EndReason
} | null
