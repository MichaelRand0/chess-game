import React from "react"
import Cell from "./Cell"
import { useTheme } from "@/hooks/theme"
import { useTable } from "@/hooks/table"
import { useCell } from "@/hooks/cell"
import { useMove } from "@/hooks/move"

type Props = {}

const Table = (props: Props) => {
  const { theme } = useTheme()
  const { cellSize } = useTable()
  const {cells} = useCell()
  const {getMoves} = useMove()
  return (
    <div className="flex flex-wrap" style={{ maxWidth: cellSize * 8}}>
      {cells.map(cell => {
        getMoves(cell)
        return (
          <Cell {...cell} />
        )
      })}
    </div>
  )
}

export default Table
