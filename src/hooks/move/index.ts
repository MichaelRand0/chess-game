import { ICell } from "@/models/Cell"
import { PieceNames, Side } from "@/models/Piece"
import { useCoords } from "../coords"
import { useCell } from "../cell"
import { useEffect } from "react"

export const useMove = () => {
  const { coords } = useCoords()
  const { cells } = useCell()
  const { charsArr } = coords
  const checkVertical = (currCell: ICell, cells: ICell[]) => {
    const currPiece = currCell?.piece
    const isPawn = currPiece?.name === PieceNames.pawn
    let arrA = cells.filter((cell) => {
      const numOfId = Number(cell.id.split("")[1])
      const numOfCurrId = Number(currCell.id.split("")[1])
      return numOfId > numOfCurrId
    })
    let arrB = cells.filter((cell) => {
      const numOfId = Number(cell.id.split("")[1])
      const numOfCurrId = Number(currCell.id.split("")[1])
      return numOfId < numOfCurrId
    })
    if(currCell?.piece?.side === Side.white) {
      arrB = arrB.reverse()
    } else {
      arrA = arrA.reverse()
    }
    const result = []
    console.log('arrA', arrA)
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i]?.piece) {
        if (isPawn) {
          break
        } else {
          arrA[i]?.piece?.side === currPiece?.side ? null : result.push(arrA[i])
          break
        }
      } else {
        result.push(arrA[i])
      }
    }
    for (let i = 0; i < arrB.length; i++) {
      if (arrB[i]?.piece) {
        if (isPawn) {
          break
        } else {
          arrB[i]?.piece?.side === currPiece?.side ? null : result.push(arrB[i])
          break
        }
      } else {
        result.push(arrB[i])
      }
    }
    return result
  }

  const checkHorizontal = (currCell: ICell, cells: ICell[]) => {
    const currPiece = currCell?.piece
    let arrA = cells.filter((cell) => {
      const indexOfChar = charsArr.indexOf(cell?.id.split("")[0])
      const indexOfCurrChar = charsArr.indexOf(currCell?.id.split("")[0])
      return indexOfChar < indexOfCurrChar
    })
    let arrB = cells.filter((cell) => {
      const indexOfChar = charsArr.indexOf(cell?.id.split("")[0])
      const indexOfCurrChar = charsArr.indexOf(currCell?.id.split("")[0])
      return indexOfChar > indexOfCurrChar
    })
    if(currCell?.piece?.side === Side.white) {
      arrA = arrA.reverse()
    } else {
      arrB = arrB.reverse()
    }
    const result = []
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i]?.piece) {
        arrA[i]?.piece?.side === currPiece?.side ? null : result.push(arrA[i])
        break
      } else {
        result.push(arrA[i])
      }
    }
    for (let i = 0; i < arrB.length; i++) {
      if (arrB[i]?.piece) {
        arrB[i]?.piece?.side === currPiece?.side ? null : result.push(arrB[i])
        break
      } else {
        result.push(arrB[i])
      }
    }
    return result
  }

  const checkDiagonal = (currCell: ICell) => {
    const directions = [
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
      { x: -1, y: -1 },
    ]
    const currPiece = currCell?.piece
    const char = currCell.id.split("")[0]
    const indexOfChar = charsArr.indexOf(char)
    const num = Number(currCell.id.split("")[1])
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
        const piece = cell?.piece
        if (cell) {
          x = x < 0 ? x - 1 : x + 1
          y = y < 0 ? y - 1 : y + 1
          if (piece) {
            if (piece?.side !== currPiece?.side) {
              result.push(cell)
              break
            } else {
              break
            }
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

  const checkMoves = (cell: ICell, moves: ICell[]) => {
    const piece = cell?.piece
    switch (piece?.name) {
      case PieceNames.pawn:
        return checkVertical(cell, moves)
      case PieceNames.rock:
        const verticalMoves = checkVertical(cell, moves)
        const horizontalMoves = checkHorizontal(cell, moves)
        return verticalMoves.concat(horizontalMoves)
      case PieceNames.bishop:
        return checkDiagonal(cell)
      case PieceNames.queen:
        const vertical = checkVertical(cell, moves)
        const horizontal = checkHorizontal(cell, moves)
        const diagonals = checkDiagonal(cell)
        return vertical.concat(horizontal, diagonals)

      default:
        return moves
    }
  }

  useEffect(() => {
    if (cells.length > 0) {
      checkDiagonal(cells[2])
    }
  }, [cells])

  return {
    checkVertical,
    checkHorizontal,
    checkDiagonal,
    checkMoves,
  }
}
