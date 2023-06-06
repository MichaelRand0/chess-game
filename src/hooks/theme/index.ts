import { useDispatch, useSelector } from "react-redux"
import { themes } from "./themes"
import { ThemeName } from "./types"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { themeSlice } from "@/redux/slices/theme.slice"

export const useTheme = () => {
  const getTheme = (theme: ThemeName) => {
    return themes[theme]
  }
  const dispatch = useDispatch()
  const themeSelector = useSelector((state: RootState) => state.theme)
  const { theme } = themeSelector
  const actions = bindActionCreators(
    {
      ...themeSlice.actions,
    },
    dispatch
  )
  const { setTheme } = actions

  return {
    theme: themes[theme],
    setTheme,
  }
}
