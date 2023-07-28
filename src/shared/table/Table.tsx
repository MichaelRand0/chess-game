import React, { useEffect } from "react"
import Cell from "./Cell"
import { useTable } from "@/hooks/table"
import { useCell } from "@/hooks/cell"
import { HighLightTypes } from "@/models/Cell"
import { useStory } from "@/hooks/story"
import { useAttack } from "@/hooks/move/attack"
import { useMove } from "@/hooks/move"

type Props = {}

const Table = (props: Props) => {
  const { cellSize, initCells } = useTable()
  const { lastMoves } = useStory()
  const { cells, selectedCell, markedCells } = useCell()
  const { pieceHandler } = useMove()
  useEffect(() => {
    initCells()
  }, [cellSize])

  useEffect(() => {
    console.log('cells', cells)
  }, [cells])

  return (
    <div className="flex flex-wrap" style={{ maxWidth: cellSize * 8 }}>
      {cells.map((cell) => {
        const isEmptyCell = !cell?.piece
        const isCellMarked = markedCells.some((item) => item.id === cell.id)
        const isCellSelected = selectedCell?.id === cell.id
        const isLastMove =
          cell.id === lastMoves?.from || cell.id === lastMoves?.to
        const highlightType =
          isEmptyCell && isCellMarked
            ? HighLightTypes.MOVE
            : isCellMarked && !isEmptyCell
            ? HighLightTypes.ATTACK
            : isCellSelected
            ? HighLightTypes.SELECTED
            : isLastMove
            ? HighLightTypes.LAST_MOVE
            : undefined
        return (
          <Cell
            highlightType={highlightType}
            {...cell}
            onClick={() => pieceHandler(cell)}
          />
        )
      })}
    </div>
  )
}

export default Table
