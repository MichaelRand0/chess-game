
export enum Side {
  white = 'white',
  black = 'black'
}

export enum Piece {
  pawn = 'pawn',
  king = 'king',
  queen = 'queen',
  bishop = 'bishop',
  knight = 'knight',
  rock = 'rock'
}

export interface IPiece extends React.ComponentProps<'div'> {
  // name: Piece
  side: Side
  size: number
}
