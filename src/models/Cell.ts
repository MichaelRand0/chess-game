import { IPiece } from "./Piece"

export interface ICell {
  id: string
  piece: IPiece | null
  colors: {
    bg: string
    index: string
    hover: string
    lastMove: string
  }
  index?: {
    top?: string | number
    bottom?: string | number
  }
  size: number
}

export interface ISelectedCell extends Omit<ICell, 'onClick'> {}

export enum HighLightTypes {
  MOVE = 'MOVE',
  SELECTED = 'SELECTED',
  ATTACK = 'ATTACK',
  LAST_MOVE = 'LAST_MOVE'
}