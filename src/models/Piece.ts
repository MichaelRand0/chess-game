import { Theme } from "@/hooks/theme/types"
import { ICell } from "./Cell"

export enum Side {
  white = 'white',
  black = 'black'
}

export enum PieceNames {
  pawn = 'pawn',
  king = 'king',
  queen = 'queen',
  bishop = 'bishop',
  knight = 'knight',
  rock = 'rock'
}

export type PieceLogic = {
  onClick: (cell: ICell) => void
  getMoves?: (cell: ICell) => ICell[]
  getAttackMoves?: (cell: ICell) => ICell[]
}

export interface IFigure {
  size: number
  colorTheme: Theme
}

export interface IPiece extends Omit<IFigure, 'colorTheme'> {
  side: Side
  name: PieceNames
  movesCount: number
}
