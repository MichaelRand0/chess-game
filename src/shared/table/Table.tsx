import React, { useEffect } from "react"
import Cell from "./Cell"
import { useTable } from "@/hooks/table"
import { useCell } from "@/hooks/cell"

type Props = {}

const Table = (props: Props) => {
  const { cellSize, initCells } = useTable()
  const {cells} = useCell()
  useEffect(() => {
    initCells()
  }, [cellSize]) 
  return (
    <div className="flex flex-wrap" style={{ maxWidth: cellSize * 8}}>
      {cells.map(cell => {
        return (
          <Cell {...cell} />
        )
      })}
    </div>
  )
}

export default Table
