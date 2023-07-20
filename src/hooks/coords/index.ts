import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { useCell } from "../cell"
import { ICell } from "@/models/Cell"

export const useCoords = () => {
  const configSelector = useSelector((state: RootState) => state.config)
  const { coords } = configSelector
  const { charsArr } = coords
  const { cells } = useCell()

  const getCellByCoords = (x: number, y: number, table: ICell[] = cells) => {
    const id = `${charsArr[x]}${y}`
    return table.filter((cell) => cell.id === id)[0]
  }
  const getCoordsById = (id: string) => {
    const splitted = id.split("")
    const x = charsArr.indexOf(splitted[0])
    const y = Number(splitted[1])
    return {
      x,
      y,
    }
  }

  const getCellById = (id: string) => cells.filter((cell) => cell.id === id)

  return {
    coords,
    getCellByCoords,
    getCoordsById,
    getCellById,
  }
}
