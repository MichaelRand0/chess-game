type Result = "Win" | "Lose" | "Draw"

type EndReason = "checkmate" | "no pieces" | "surrender"

type GameResult = {
  type: Result
  reason: EndReason
} | null
