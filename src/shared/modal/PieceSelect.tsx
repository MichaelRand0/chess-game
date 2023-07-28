import React from "react"
import Cell from "../table/Cell"
import { PieceNames, Side } from "@/models/Piece"
import { useConfig } from "@/hooks/config"
import { useTheme } from "@/hooks/theme"
import { useCell } from "@/hooks/cell"
import { useModal } from "@/hooks/modal"
import { useMove } from "@/hooks/move"
import { useStory } from "@/hooks/story"

type Props = {}

const newPieces = [
  PieceNames.queen,
  PieceNames.rock,
  PieceNames.bishop,
  PieceNames.knight,
]

const PieceSelect = (props: Props) => {
  const { size } = useConfig()
  const {setCurrentModal} = useModal()
  const { theme } = useTheme()
  const { cells, setCells } = useCell()
  const {lastMoves} = useStory()
  const {movePiece} = useMove()
  const cell = cells.filter(item => item.id === lastMoves?.to)[0]

  const onClick = (newPiece: PieceNames) => {
    const newCells = cells.map((item) => {
      if (item.id === cell?.id) {
        return {
          ...cell,
          piece: {
            ...cell?.piece,
            name: newPiece,
          },
        }
      }
      return item
    })
    setCells(newCells)
    setCurrentModal(null)
  }
  return (
    <div
      className={`flex w-full flex-wrap`}
      style={{ maxWidth: size.cell * 2 }}
    >
      {newPieces.map((pieceName, i) => {
        return (
          <Cell
            onClick={() => onClick(pieceName)}
            size={size}
            colors={{
              bg: i % 3 === 0 ? theme.cellWhite : theme.cellBlack,
              hover: theme.hover,
              lastMove: theme.lastMove,
            }}
            piece={{
              name: pieceName,
              movesCount: cell?.piece?.movesCount ?? 1,
              side: cell?.piece?.side ?? Side.white,
            }}
          />
        )
      })}
    </div>
  )
}

export default PieceSelect
