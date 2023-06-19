import React, { useEffect } from "react"
import Cell from "./Cell"
import { useTable } from "@/hooks/table"
import { useCell } from "@/hooks/cell"
import { HighLightTypes } from "@/models/Cell"
import { usePiece } from "@/hooks/piece"

type Props = {}

const Table = (props: Props) => {
  const { cellSize, initCells } = useTable()
  const {cells, selectedCell, markedCells} = useCell()
  const {pieceHandler} = usePiece()
  useEffect(() => {
    initCells()
  }, [cellSize])

  return (
    <div className="flex flex-wrap" style={{ maxWidth: cellSize * 8}}>
      {cells.map(cell => {
        const isEmptyCell = !cell?.piece
        const isCellMarked = markedCells.some(item => item.id === cell.id)
        const isCellSelected = selectedCell?.id === cell.id
        const highlightType = isEmptyCell && isCellMarked ? HighLightTypes.MOVE : isCellMarked && !isEmptyCell ? HighLightTypes.ATTACK : isCellSelected ? HighLightTypes.SELECTED : undefined
        return (
          <Cell highlightType={highlightType} {...cell} onClick={() => pieceHandler(cell)} />
        )
      })}
    </div>
  )
}

export default Table
