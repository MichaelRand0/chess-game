import { ModalName } from '@/models/Modal'
import Modal from '@/shared/modal/Modal'
import PieceSelect from '@/shared/modal/PieceSelect'
import React from 'react'

interface Props {
  currentModal: ModalName
}

const ModalContainer = (props: Props) => {
  const {currentModal} = props
  return (
    <Modal>
      <PieceSelect />
    </Modal>
  )
}

export default ModalContainer