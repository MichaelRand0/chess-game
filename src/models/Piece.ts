import { Theme } from "@/hooks/theme/types"

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

export interface IFigure {
  size: number
  colorTheme: Theme
}

export interface IPiece extends Omit<IFigure, 'colorTheme'> {
  side: Side
  name: PieceNames
}
