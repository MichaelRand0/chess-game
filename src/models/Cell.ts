export interface ICell {
  id: string
  piece: null
  colors: {
    bg: string
    index: string
  }
  index?: {
    top?: string | number
    bottom?: string | number
  }
  size: {
    cellSize: number
    pieceSize: number
  }
}
