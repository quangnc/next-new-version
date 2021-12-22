import type { ReactNode } from 'react'

import { Fragment, useState } from 'react'
import { Modal } from '@mui/material'

export const ButtonWithModal = ({
  renderButton,
  renderModal,
}: ButtonWithModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Fragment>
      {renderButton({ isModalOpen, openModal, closeModal })}
      {renderModal({ Modal, isModalOpen, openModal, closeModal })}
    </Fragment>
  )
}

export type ButtonWithModalProps = {
  renderButton: RenderButtonFn
  renderModal: RenderModalFn
}

export type RenderButtonFn = (inputs: ModalState) => ReactNode
export type RenderModalFn = (inputs: RenderModalFnInputs) => ReactNode

export type RenderModalFnInputs = ModalState & { Modal: typeof Modal }

type ModalState = {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}
