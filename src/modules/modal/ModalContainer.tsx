import { ModalName } from '@/models/Modal'
import Checkmate from '@/shared/modal/Checkmate'
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
      {currentModal === 'newPiece' ? <PieceSelect /> : ''}
      {currentModal === 'result' ? <Checkmate /> : ''}
    </Modal>
  )
}

export default ModalContainer