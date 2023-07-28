import { modalSlice } from "@/redux/slices/modal.slice"
import { RootState } from "@/redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

export const useModal = () => {
  const dispatch = useDispatch()
  const playerSelector = useSelector((state: RootState) => state.modal)
  const { currentModal } = playerSelector
  const actions = bindActionCreators({ ...modalSlice.actions }, dispatch)
  const { setCurrentModal } = actions

  return {
    currentModal,
    setCurrentModal,
  }
}
