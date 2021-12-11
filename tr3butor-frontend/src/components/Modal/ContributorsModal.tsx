import React from 'react'
import { Modal } from 'components/Modal/Modal'
import { ScModal } from './styled'
import { Button } from '../Button/Button'
import { colors } from '../../utilits/Colors'

interface Props {
  onClose: () => void;
}

export const ContributorsModal: React.FC<Props> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <ScModal>
        <div className="modal-header flex">
          <span>Orakuru contributors</span>
          <Button
            label="close"
            onClick={onClose}
            primary={false}
            color={colors.dark}
          />
        </div>
        <div className="modal-body images">
          <div className="flex">
            <img src="/images/demo/ava.png" />
            <img src="/images/demo/ava_1.png" />
            <img src="/images/demo/ava_2.png" />
            <img src="/images/demo/ava_3.png" />
            <img src="/images/demo/ava_4.png" />
            <img src="/images/demo/ava_5.png" />
          </div>
        </div>
      </ScModal>
    </Modal>
  )
}
