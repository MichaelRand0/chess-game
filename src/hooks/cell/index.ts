import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { cellsSlice } from "@/redux/slices/cells.slice"

export const useCell = () => {
  const dispatch = useDispatch()
  const cellsSelector = useSelector((state: RootState) => state.cells)
  const { cells, markedCells, selectedCell } = cellsSelector
  const actions = bindActionCreators(
    {
      ...cellsSlice.actions,
    },
    dispatch
  )
  const { setCells, setMarkedCells, setSelectedCell } = actions

  return {
    cells,
    setCells,
    setMarkedCells,
    selectedCell,
    setSelectedCell,
    markedCells,
  }
}
