import { ICell } from "@/models/Cell"
import { PieceNames, Side } from "@/models/Piece"
import { useCoords } from "../coords"
import { useCell } from "../cell"
import { usePlayer } from "../player"
import { useStory } from "../story"
import getSplittedId from "@/helpers/getSplittedId"

export const useMove = () => {
  const { coords } = useCoords()
  const { cells, setCells, setMarkedCells, setSelectedCell } = useCell()
  const { togglePlayingSide } = usePlayer()
  const { setLastMoves } = useStory()
  const { charsArr } = coords

  const checkMoves = (cell: ICell) => {
    const piece = cell?.piece
    switch (piece?.name) {
      case PieceNames.pawn:
        return getPawnMoves(cell)
      case PieceNames.rock:
        const verticalMoves = getVerticalMoves(cell)
        const horizontalMoves = getHorizontalMoves(cell)
        return verticalMoves.concat(horizontalMoves)
      case PieceNames.bishop:
        return getDiagonalMoves(cell)
      case PieceNames.queen:
        const vertical = getVerticalMoves(cell)
        const horizontal = getHorizontalMoves(cell)
        const diagonals = getDiagonalMoves(cell)
        return vertical.concat(horizontal, diagonals)

      default:
        return []
    }
  }

  const getPawnMoves = (cell: ICell) => {
    const { id, piece } = cell
    const { char, num } = getSplittedId(id)
    const moves = []
    const counter = (x: number) => (piece?.side === Side.white ? x : x * -1)
    for (
      let i = num + counter(1);
      true;
      piece?.side === Side.white ? i++ : i--
    ) {
      const cellId = `${char}${i}`
      const cell = cells.filter((item) => item.id === cellId)[0]
      if (cell?.piece) {
        break
      }
      if (piece?.movesCount ?? 0 > 0) {
        if (cell?.piece) {
          break
        }
        moves.push(cell)
        break
      } else {
        if (i === num + counter(2)) {
          moves.push(cell)
          break
        }
        moves.push(cell)
        continue
      }
    }
    return moves
  }

  const getVerticalMoves = (cell: ICell, withCollisions: boolean = true) => {
    const { id, piece } = cell
    const { char, num } = getSplittedId(id)
    const res = cells.filter((item) => getSplittedId(item.id).char === char)
    if (withCollisions) {
      const resCollisions = []
      for (let i = num - 1; i > 0; i--) {
        const newId = `${char}${i}`
        const newCell = cells.filter((cellItem) => cellItem.id === newId)[0]
        if (newCell?.piece) {
          if (newCell?.piece.side === piece?.side) {
            break
          }
          resCollisions.push(newCell)
          break
        }
        resCollisions.push(newCell)
        continue
      }
      for (let i = num + 1; i <= 8; i++) {
        const newId = `${char}${i}`
        const newCell = cells.filter((cellItem) => cellItem.id === newId)[0]
        if (newCell?.piece) {
          if (newCell?.piece.side === piece?.side) {
            break
          }
          resCollisions.push(newCell)
          break
        }
        resCollisions.push(newCell)
        continue
      }
      return resCollisions
    }
    return res
  }

  const getHorizontalMoves = (cell: ICell, withCollisions: boolean = true) => {
    const { id, piece } = cell
    const { char, num } = getSplittedId(id)
    const res = cells.filter((item) => getSplittedId(item.id).num === num)
    if (withCollisions) {
      const resCollisions = []
      for (let i = charsArr.indexOf(char) - 1; i !== 1; i--) {
        const newId = `${charsArr[i]}${num}`
        const newCell = cells.filter((cellItem) => cellItem.id === newId)[0]
        if(!newCell) {
          break
        }
        if (newCell?.piece) {
          if (newCell?.piece.side === piece?.side) {
            break
          }
          resCollisions.push(newCell)
          break
        }
        resCollisions.push(newCell)
        continue
      }
      for (let i = charsArr.indexOf(char) + 1; i !== 8; i++) {
        const newId = `${charsArr[i]}${num}`
        const newCell = cells.filter((cellItem) => cellItem.id === newId)[0]
        if (newCell?.piece) {
          if (newCell?.piece.side === piece?.side) {
            break
          }
          resCollisions.push(newCell)
          break
        }
        resCollisions.push(newCell)
        continue
      }
      return resCollisions
    }
    return res
  }

  const getDiagonalMoves = (currCell: ICell, withCollisions = true) => {
    const directions = [
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
      { x: -1, y: -1 },
    ]
    const { id, piece } = currCell
    const { char, num } = getSplittedId(id)
    const indexOfChar = charsArr.indexOf(char)
    const result: ICell[] = []
    directions.forEach((dir) => {
      const { x: initX, y: initY } = dir
      let x = initX
      let y = initY
      while (true) {
        const newChar = charsArr[indexOfChar + x]
        const newNum = num + y
        const id = `${newChar}${newNum}`
        const cell = cells.find((cell) => cell.id === id)
        if (cell) {
          x = x < 0 ? x - 1 : x + 1
          y = y < 0 ? y - 1 : y + 1
          if (withCollisions) {
            if (cell?.piece) {
              if (cell?.piece?.side === piece?.side) {
                break
              }
              result.push(cell)
              break
            }
            result.push(cell)
            continue
          }
          result.push(cell)
          continue
        } else {
          break
        }
      }
    })
    return result
  }

  const movePiece = (cellFrom: ICell, cellTo: ICell) => {
    const pieceFrom = cellFrom?.piece
    if (pieceFrom) {
      const isPawn = pieceFrom?.name === PieceNames.pawn
      const movesCount = pieceFrom?.movesCount
      const newCells = cells.map((item) => {
        if (item.id === cellFrom.id) {
          return {
            ...item,
            piece: null,
          }
        }
        if (item.id === cellTo.id && pieceFrom) {
          return {
            ...item,
            piece: {
              ...pieceFrom,
              pos: cellTo.id,
              movesCount: isPawn ? movesCount + 1 : movesCount,
            },
          }
        }
        return item
      })
      setCells(newCells)
      setMarkedCells([])
      setSelectedCell(null)
      togglePlayingSide()
      setLastMoves({
        from: cellFrom.id,
        to: cellTo.id,
      })
    }
  }

  return {
    checkMoves,
    movePiece,
    getVerticalMoves,
    getHorizontalMoves,
    getDiagonalMoves,
    getPawnMoves,
  }
}
