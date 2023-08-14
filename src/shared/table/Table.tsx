import React, { useEffect } from "react"
import Cell from "./Cell"
import { useGame } from "@/hooks/game"
import { useCell } from "@/hooks/cell"
import { HighLightTypes } from "@/models/Cell"
import { useStory } from "@/hooks/story"
import { useMove } from "@/hooks/move"
import ModalContainer from "@/modules/modal/ModalContainer"
import { useModal } from "@/hooks/modal"
import { useConfig } from "@/hooks/config"
import { usePlayer } from "@/hooks/player"
import { Side } from "@/models/Piece"
import { useBot } from "@/hooks/bot"

type Props = {}

const Table = (props: Props) => {
  const { initCells, stopGame } = useGame()
  const { lastMoves } = useStory()
  const { cells, selectedCell, markedCells } = useCell()
  const { pieceHandler, getIsCheckmate } = useMove()
  const { currentModal, setCurrentModal } = useModal()
  const { size } = useConfig()
  const { playingSide, player } = usePlayer()
  const { randomMove } = useBot()

  useEffect(() => {
    initCells()
  }, [])

  useEffect(() => {
    if (playingSide && playingSide !== player.side) {
      if (getIsCheckmate(playingSide)) {
        stopGame({
          winner: playingSide === Side.white ? Side.black : Side.white,
          reason: "checkmate",
        })
        setCurrentModal("result")
      } else {
        randomMove()
      }
    }
  }, [playingSide])

  return (
    <div
      className="flex flex-wrap relative"
      style={{ maxWidth: size.cell * 8 }}
    >
      {currentModal && <ModalContainer currentModal={currentModal} />}
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
            size={size}
            key={cell.id}
            onClick={() => pieceHandler(cell)}
          />
        )
      })}
    </div>
  )
}

export default Table
