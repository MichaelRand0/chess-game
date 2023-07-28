import { configSlice } from "@/redux/slices/config.slice"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const useConfig = () => {
  const dispatch = useDispatch()
  const configSelector = useSelector((state: RootState) => state.config)
  const { piecePositions } = configSelector
  const actions = bindActionCreators({ ...configSlice.actions }, dispatch)
  const { setPositions } = actions

  const [size, setSize] = useState({
    cell: 1920 * 0.45 * 0.125,
    figure: 1920 * 0.45 * 0.125 * 0.7,
  })

  useEffect(() => {
    const width = window.screen.width
    setSize({
      cell: width * 0.45 * 0.125,
      figure: width * 0.45 * 0.125 * 0.7,
    })
  }, [])

  return {
    piecePositions,
    setPositions,
    size,
    setSize,
  }
}
