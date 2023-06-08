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
    const charArr = ["a", "b", "c", "d", "e", "f", "g", "h"]
    for (let i = 1; i <= 64; i++) {
      const colors = {
        bg: isBlackOdd
          ? i % 2 === 0
            ? theme.cellBlack
            : theme.cellWhite
          : i % 2 === 0
          ? theme.cellWhite
          : theme.cellBlack,
        index: !isBlackOdd
          ? i % 2 === 0
            ? theme.cellBlack
            : theme.cellWhite
          : i % 2 === 0
          ? theme.cellWhite
          : theme.cellBlack,
      }
      const isUpIndex = Number.isInteger((i - 1) / 8 + 1)
      const upIndex = (72 - (i + 7)) / 8
      const isDownIndex = 57 - i <= 0
      const downIndex = charArr[(57 - i) * -1]
      cellsArr.push(
        <Cell
          key={i}
          size={cellSize}
          color={colors}
          upIndex={isUpIndex ? upIndex : ""}
          downIndex={isDownIndex ? downIndex : ""}
        />
      )
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
