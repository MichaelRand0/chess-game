import { storySlice } from "@/redux/slices/story.slice"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

export const useStory = () => {
  const dispatch = useDispatch()
  const storySelector = useSelector((state: RootState) => state.story)
  const actions = bindActionCreators({ ...storySlice.actions }, dispatch)
  const { lastMoves } = storySelector
  const { setLastMoves } = actions

  return {
    lastMoves,
    setLastMoves,
  }
}
