import { useEffect, useState } from "react"
import { useTheme } from "../theme"
import { ICell } from "@/models/Cell"
import { useTable } from "../table"

export const useCell = () => {
  const [cells, setCells] = useState<ICell[]>([])
  const { theme } = useTheme()
  const { cellSize } = useTable()
  const charArr = ["a", "b", "c", "d", "e", "f", "g", "h"].reverse()
  const initCells = () => {
    const newCells:ICell[] = []
    charArr.forEach((char, charIndex) => {
      for(let i = 8; i >= 1; i--) {
        const bgColor = charIndex % 2 === 0 ? i % 2 === 0 ? theme.cellWhite : theme.cellBlack : i % 2 === 0 ? theme.cellBlack : theme.cellWhite
        const indexColor = charIndex % 2 === 0 ? i % 2 === 0 ? theme.cellBlack : theme.cellWhite : i % 2 === 0 ? theme.cellWhite : theme.cellBlack
        newCells.push({
          id: `${char}${i}`,
          piece: null,
          colors: {
            bg: bgColor,
            index: indexColor
          },
          index: {
            top: i === 8 ? (i - charIndex) : '',
            bottom: charIndex === 7 ? charArr[i - 1] : ''
          },
          size: cellSize
        })
      }
    })
    setCells(newCells)
  }
  useEffect(() => {
    initCells()
  }, [])
  return {
    cells,
  }
}