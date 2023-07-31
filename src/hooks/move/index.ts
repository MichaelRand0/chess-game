import { ICell } from "@/models/Cell"
import { PieceNames, Side } from "@/models/Piece"
import { useCoords } from "../coords"
import { useCell } from "../cell"
import { usePlayer } from "../player"
import { useStory } from "../story"
import getSplittedId from "@/helpers/getSplittedId"
import { useModal } from "../modal"

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
  const {setCurrentModal} = useModal()
  const { setLastMoves } = useStory()
  const { charsArr } = coords

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
      ? [
          getCellByCoords(x - 1, y + 1, table),
          getCellByCoords(x + 1, y + 1, table),
        ]
      : [
          getCellByCoords(x - 1, y - 1, table),
          getCellByCoords(x + 1, y - 1, table),
        ]
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

  const checkCollisions = (cellA: ICell, cellB: ICell) => {
    const { num: numA, char: charA } = getSplittedId(cellA.id)
    const { num: numB, char: charB } = getSplittedId(cellB.id)

    if (numA === numB) {
      const res = cells
        .map((cell) => {
          const { num: cellNum, char: cellChar } = getSplittedId(cell?.id)
          if (cellNum === numA) {
            if (
              (charsArr.indexOf(cellChar) < charsArr.indexOf(charA) &&
                charsArr.indexOf(cellChar) > charsArr.indexOf(charB)) ||
              (charsArr.indexOf(cellChar) > charsArr.indexOf(charA) &&
                charsArr.indexOf(cellChar) < charsArr.indexOf(charB))
            ) {
              if (cell?.piece) {
                return false
              }
              return cell
            }
          }
          return null
        })
        .filter((item) => item !== null)
      if (res.includes(false)) {
        return null
      } else {
        return res
      }
    }
  }

  const checkCastling = (kingCell: ICell) => {
    const rocks = cells.filter(
      (item) =>
        item?.piece?.side === kingCell?.piece?.side &&
        item?.piece?.name === PieceNames.rock
    )
    // console.log('rocks', rocks)
    let markedRocks: ICell[] = []
    rocks.forEach((item) => {
      const checkedCells = checkCollisions(kingCell, item)
      let moves: ICell[] = checkedCells ? [...checkedCells, kingCell] : []
      let filteredMoves = filterCheckMoves(kingCell, moves)
      if (moves?.length > 0 && filteredMoves.length === moves.length) {
        if (
          item?.piece?.movesCount === 0 &&
          kingCell?.piece?.movesCount === 0
        ) {
          const attackedCells = getAttackedCells(
            cells,
            kingCell.piece.side
          ).filter((cell) => moves.filter((move) => cell.id === move.id)[0])
          if (attackedCells?.length === 0) {
            markedRocks.push(item)
          }
        }
      }
    })
    return markedRocks
  }

  const castling = (kingCell: ICell, rockCell: ICell) => {
    const { num: rockNum, char: rockChar } = getSplittedId(rockCell.id)
    const newKingId = rockChar === "h" ? `g${rockNum}` : `c${rockNum}`
    const newRockId = rockChar === "h" ? `f${rockNum}` : `d${rockNum}`
    const newCells = cells.map((item) => {
      if (item.id === kingCell.id || item.id === rockCell.id) {
        return {
          ...item,
          piece: null,
        }
      } else if (item.id === newKingId) {
        return {
          ...item,
          piece: {
            ...kingCell?.piece,
            pos: newKingId,
            movesCount: 1,
          },
        }
      } else if (item.id === newRockId) {
        return {
          ...item,
          piece: {
            ...rockCell?.piece,
            pos: newRockId,
            movesCount: 1,
          },
        }
      }
      return item
    })
    setCells(newCells)
    setMarkedCells([])
    setSelectedCell(null)
    togglePlayingSide()
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
    let result = filterCheckMoves(cell, moves ?? [])
    const {num} = getSplittedId(cell?.id)
    if (selectedCell?.piece?.name === PieceNames.king) {
      const rocks = checkCastling(selectedCell)
      if (rocks.filter((rockCell) => rockCell.id === cell.id).length > 0) {
        castling(selectedCell, cell)
        return false
      }
    }
    if (cell?.piece?.name === PieceNames.king) {
      result = result.concat(checkCastling(cell))
    }
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
            if(selectedCell?.piece?.name === PieceNames.pawn) {
              if(selectedCell?.piece?.side === Side.white && num === 8 || selectedCell?.piece?.side === Side.black && num === 1) {
                setCurrentModal('newPiece')
                movePiece(selectedCell, cell)
                return false
              }
            }
            movePiece(selectedCell, cell)
            togglePlayingSide()
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
          console.log('mate', cell)
        return getPawnMoves(cell, table)
    }
  }

  const pieceHandler = (cell: ICell) => {
    const pieceName = cell?.piece?.name
    switch (pieceName) {
      case PieceNames.pawn:
        return onClick(cell, getPawnMoves(cell).moves.filter(item => item))
      case PieceNames.queen:
        return onClick(cell, getQueenMoves(cell).moves.filter(item => item))
      case PieceNames.king:
        return onClick(cell, getKingMoves(cell).moves.filter(item => item))
      case PieceNames.bishop:
        return onClick(cell, getBishopMoves(cell).moves.filter(item => item))
      case PieceNames.knight:
        return onClick(cell, getKnightMoves(cell).moves.filter(item => item))
      case PieceNames.rock:
        return onClick(cell, getRockMoves(cell).moves.filter(item => item))

      default:
        return onClick(cell)
    }
  }

  const movePiece = (cellFrom: ICell, cellTo: ICell) => {
    const pieceFrom = cellFrom?.piece
    if (pieceFrom) {
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
              movesCount: movesCount + 1,
            },
          }
        }
        return item
      })
      // console.log('newCells', newCells)
      setCells(newCells)
      setMarkedCells([])
      setSelectedCell(null)
      setLastMoves({
        from: cellFrom.id,
        to: cellTo.id,
      })
    }
  }

  const getAttackedCells = (cellsCopy: ICell[], side?: Side) => {
    let newCells: ICell[] = []
    cellsCopy.forEach((cell) => {
      const piece = cell?.piece
      if (piece && piece?.side !== side) {
        const name = piece.name
        const isPawn = name === PieceNames.pawn
        const { moves: initMoves, attackMoves } = getMoves(cell, cellsCopy)
        let moves = isPawn ? attackMoves : attackMoves ? attackMoves : initMoves
        if (moves) {
          moves = moves.filter((move) => move)
          moves.forEach((item) => newCells.push(item))
        }
      }
    })
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
        if (item?.id === move?.id) {
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
      const attackedCells = getAttackedCells(fakeTable, cell?.piece?.side)
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

  const getIsCheckmate = (sideToCheck: Side) => {
    const sideCells = cells.filter(cell => cell?.piece?.side === sideToCheck)
    let isCheckmate = true
    for(let i = 0; i < sideCells.length; i++) {
      const moves = getMoves(sideCells[i])
      const filteredMoves = filterCheckMoves(sideCells[i], moves.moves)
      if(filteredMoves.length > 0) {
        isCheckmate = false
      }
    }
    return isCheckmate
  }

  return {
    movePiece,
    getVerticalMoves,
    getHorizontalMoves,
    getDiagonalMoves,
    pieceHandler,
    getPawnMoves,
    getQueenMoves,
    getMoves,
    getAttackedCells,
    checkCastling,
    getIsCheckmate,
    filterCheckMoves,
  }
}
