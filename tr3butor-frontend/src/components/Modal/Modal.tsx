import React from 'react'

import { BodyScrollLock } from 'utilits/BlockBodyScroll'

import { ScModalBackground, ScModalContainer, ScModalContent } from './styled'

export interface ModalProps {
  children: any;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  onClose
}) => {
  return (

    <BodyScrollLock>
      <ScModalContainer>
        <ScModalBackground onClick={onClose}/>
        <ScModalContent>{children}</ScModalContent>
      </ScModalContainer>
    </BodyScrollLock>

  )
}
