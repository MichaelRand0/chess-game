import { ICell } from "@/models/Cell"
import { PieceNames, Side } from "@/models/Piece"
import { useCoords } from "../coords"
import { useCell } from "../cell"
import { usePlayer } from "../player"
import { useStory } from "../story"
import getSplittedId from "@/helpers/getSplittedId"

export const useMove = () => {
  const { coords, getCoordsById, getCellByCoords } = useCoords()
  const {
    cells,
    setCells,
    setMarkedCells,
    setSelectedCell,
    selectedCell,
    markedCells,
  } = useCell()
  const { togglePlayingSide, player, playingSide } = usePlayer()
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

  const getPawnMoves = (cell: ICell, table = cells) => {
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
      const cell = table.filter((item) => item.id === cellId)[0]
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
    const { x, y } = getCoordsById(cell.id)
    let attackMoves = []
    const isWhite = piece?.side === Side.white
    attackMoves = isWhite
      ? [getCellByCoords(x - 1, y + 1), getCellByCoords(x + 1, y + 1)]
      : [getCellByCoords(x - 1, y - 1), getCellByCoords(x + 1, y - 1)]
    attackMoves = attackMoves.filter(
      (move) => move?.piece && move?.piece?.side !== cell?.piece?.side
    )
    return {
      moves: moves.concat(attackMoves),
      attackMoves,
    }
  }

  const getQueenMoves = (cell: ICell, table: ICell[] = cells) => {
    const verticalMoves = getVerticalMoves(cell, table)
    const horizontalMoves = getHorizontalMoves(cell, table)
    const diagonalMoves = getDiagonalMoves(cell, table)
    const moves = diagonalMoves.concat(verticalMoves, horizontalMoves)
    return {
      moves,
    }
  }

  const getBishopMoves = (cell: ICell, table: ICell[] = cells) => {
    const moves = getDiagonalMoves(cell, table)
    return {
      moves,
    }
  }

  const getRockMoves = (cell: ICell, table: ICell[] = cells) => {
    const verticalMoves = getVerticalMoves(cell, table)
    const horizontalMoves = getHorizontalMoves(cell, table)
    return {
      moves: verticalMoves.concat(horizontalMoves),
    }
  }

  const getKnightMoves = (cell: ICell, table: ICell[] = cells) => {
    const coords = [
      {
        y: 2,
        x: -1,
      },
      {
        y: 2,
        x: 1,
      },
      {
        y: -2,
        x: -1,
      },
      {
        y: -2,
        x: 1,
      },
      {
        y: 1,
        x: -2,
      },
      {
        y: 1,
        x: 2,
      },
      {
        y: -1,
        x: 2,
      },
      {
        y: -1,
        x: -2,
      },
    ]
    const id = cell.id
    const char = id.split("")[0]
    const num = Number(id.split("")[1])
    const indexOfChar = charsArr.indexOf(char)
    let moves: ICell[] = []
    coords.forEach((coord) => {
      moves.push(getCellByCoords(indexOfChar + coord.x, num + coord.y, table))
    })
    moves = moves.filter(
      (item) => item && item?.piece?.side !== cell.piece?.side
    )
    return {
      moves,
    }
  }

  const getKingMoves = (cell: ICell, table: ICell[] = cells) => {
    const coords = getCoordsById(cell.id)
    let { x, y } = coords
    const moves = [
      getCellByCoords(x, y + 1, table),
      getCellByCoords(x, y - 1, table),
      getCellByCoords(x + 1, y, table),
      getCellByCoords(x - 1, y, table),
      getCellByCoords(x - 1, y - 1, table),
      getCellByCoords(x + 1, y + 1, table),
      getCellByCoords(x - 1, y + 1, table),
      getCellByCoords(x + 1, y - 1, table),
    ].filter((move) => move && move?.piece?.side !== cell?.piece?.side)
    return {
      moves,
    }
  }

  const getVerticalMoves = (
    cell: ICell,
    table: ICell[] = cells,
    withCollisions: boolean = true
  ) => {
    const { id, piece } = cell
    const { char, num } = getSplittedId(id)
    const res = table.filter((item) => getSplittedId(item.id).char === char)
    if (withCollisions) {
      const resCollisions = []
      for (let i = num - 1; i > 0; i--) {
        const newId = `${char}${i}`
        const newCell = table.filter((cellItem) => cellItem.id === newId)[0]
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
        const newCell = table.filter((cellItem) => cellItem.id === newId)[0]
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

  const getHorizontalMoves = (
    cell: ICell,
    table: ICell[] = cells,
    withCollisions: boolean = true
  ) => {
    const { id, piece } = cell
    const { char, num } = getSplittedId(id)
    const res = table.filter((item) => getSplittedId(item.id).num === num)
    if (withCollisions) {
      const resCollisions = []
      for (let i = charsArr.indexOf(char) - 1; i >= 0; i--) {
        const newId = `${charsArr[i]}${num}`
        const newCell = table.filter((cellItem) => cellItem.id === newId)[0]
        if (!newCell) {
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
        const newCell = table.filter((cellItem) => cellItem.id === newId)[0]
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

  const getDiagonalMoves = (
    currCell: ICell,
    table: ICell[] = cells,
    withCollisions = true
  ) => {
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
        const cell = table.find((cell) => cell.id === id)
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

  const onClick = (cell: ICell, moves?: ICell[]) => {
    const result = filterCheckMoves(cell, moves ?? [])
    if (player.side === playingSide) {
      const piece = cell?.piece
      if (selectedCell?.id === cell.id) {
        setSelectedCell(null)
        setMarkedCells([])
      } else {
        if (cell?.piece?.side === player.side && piece) {
          setSelectedCell(cell)
          setMarkedCells(result)
        } else {
          if (
            markedCells.some((item) => item.id === cell?.id) &&
            selectedCell
          ) {
            movePiece(selectedCell, cell)
          }
        }
      }
    }
  }

  const getMoves = (
    cell: ICell,
    table: ICell[] = cells
  ): { moves: ICell[]; attackMoves?: ICell[] } => {
    const pieceName = cell?.piece?.name
    switch (pieceName) {
      case PieceNames.pawn:
        return getPawnMoves(cell, table)
      case PieceNames.queen:
        return getQueenMoves(cell, table)
      case PieceNames.king:
        return getKingMoves(cell, table)
      case PieceNames.bishop:
        return getBishopMoves(cell, table)
      case PieceNames.knight:
        return getKnightMoves(cell, table)
      case PieceNames.rock:
        return getRockMoves(cell, table)

      default:
        return getPawnMoves(cell, table)
    }
  }

  const pieceHandler = (cell: ICell) => {
    const pieceName = cell?.piece?.name
    switch (pieceName) {
      case PieceNames.pawn:
        return onClick(cell, getPawnMoves(cell).moves)
      case PieceNames.queen:
        return onClick(cell, getQueenMoves(cell).moves)
      case PieceNames.king:
        return onClick(cell, getKingMoves(cell).moves)
      case PieceNames.bishop:
        return onClick(cell, getBishopMoves(cell).moves)
      case PieceNames.knight:
        return onClick(cell, getKnightMoves(cell).moves)
      case PieceNames.rock:
        return onClick(cell, getRockMoves(cell).moves)

      default:
        return onClick(cell)
    }
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

  const getAttackedCells = (cellsCopy: ICell[]) => {
    let newCells: ICell[] = []
    cellsCopy.forEach((cell) => {
      const piece = cell?.piece
      if (piece) {
        const name = piece.name
        const isPawn = name === PieceNames.pawn
        const { moves: initMoves, attackMoves } = getMoves(cell, cellsCopy)
        let moves = isPawn ? attackMoves : attackMoves ? attackMoves : initMoves
        if (moves) {
          // console.log('moves', moves)
          moves = moves.filter((move) => move)
          // console.log('moves',moves)
          moves.forEach((item) => newCells.push(item))
          // moves.forEach((move) => {
          //   newCells.forEach((newCell: any) => {
          //     if (move.id === newCell.id) {
          //       return {
          //         ...move,
          //         attackedBy: [...new Set([...newCell.attackedBy, cell?.id])],
          //       }
          //     } else {
          //       return newCell
          //     }
          //   })
          // })
        }
      }
    })
    // console.log('newCells',newCells)
    // const arrUniq = [...new Map(newCells.map(v => [v.id, v])).values()]
    // console.log('arrUniq', arrUniq)
    return newCells
  }

  const filterCheckMoves = (cell: ICell, markedMoves: ICell[]) => {
    const result: ICell[] = []
    markedMoves.forEach((move) => {
      let fakeTable = [...cells]
      fakeTable = fakeTable.map((item) => {
        if (item.id === cell.id) {
          return {
            ...cell,
            piece: null,
          }
        }
        if (item.id === move.id) {
          return {
            ...move,
            piece: {
              ...cell.piece,
              pos: move.id,
            },
          }
        }
        return item
      })
      // console.log('fakeTable',fakeTable)
      const attackedCells = getAttackedCells(fakeTable)
      const isKingChecked = attackedCells.some(
        (attackedCell) =>
          cell?.piece?.side === attackedCell?.piece?.side &&
          attackedCell?.piece?.name === PieceNames.king
      )
      if (!isKingChecked) {
        result.push(move)
      }
    })
    return result
  }

  return {
    checkMoves,
    movePiece,
    getVerticalMoves,
    getHorizontalMoves,
    getDiagonalMoves,
    pieceHandler,
    getPawnMoves,
    getQueenMoves,
    getMoves,
    getAttackedCells,
  }
}
