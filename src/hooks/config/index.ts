import { configSlice } from "@/redux/slices/config.slice"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

export const useConfig = () => {
  const dispatch = useDispatch()
  const configSelector = useSelector((state: RootState) => state.config)
  const { piecePositions, coords } = configSelector
  const actions = bindActionCreators({ ...configSlice.actions }, dispatch)
  const {setPositions} = actions

  return {
    piecePositions,
    setPositions,
    coords
  }
}
