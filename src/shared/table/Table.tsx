import React from "react"
import Cell from "./Cell"
import { useTheme } from "@/hooks/theme"
import { useTable } from "@/hooks/table"

type Props = {}

const Table = (props: Props) => {
  const { theme } = useTheme()
  const { cellSize } = useTable()

  const cells = () => {
    let isBlackOdd = true
    const cellsArr = []
    for (let i = 1; i <= 64; i++) {
      const condition = isBlackOdd
        ? i % 2 === 0
          ? theme.cellBlack
          : theme.cellWhite
        : i % 2 === 0
        ? theme.cellWhite
        : theme.cellBlack
      cellsArr.push(<Cell key={i} size={cellSize} color={condition} />)
      if (i % 8 === 0) {
        isBlackOdd = !isBlackOdd
      }
    }
    return cellsArr
  }
  return (
    <div className="flex flex-wrap" style={{ maxWidth: cellSize * 8 }}>
      {cells()}
    </div>
  )
}

export default Table
