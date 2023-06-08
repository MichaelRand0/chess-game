export interface ICell {
  size: number
  color: {
    bg: string
    index?: string
  }
  upIndex?: string | number
  downIndex?: string | number
}