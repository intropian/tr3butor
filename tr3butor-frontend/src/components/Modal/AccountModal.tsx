import React from 'react'
import { Modal } from 'components/Modal/Modal'
import { ScModal } from './styled'
import { Button } from '../Button/Button'
import { colors } from '../../utilits/Colors'
import { useEthers } from '@usedapp/core'

interface Props {
  onClose: () => void;
}

export const AccountModal: React.FC<Props> = ({ onClose }) => {
  const { account, deactivate } = useEthers()
  const handleDeactivateAccount = () => {
    deactivate()
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <ScModal>
        <div className="modal-header flex">
          <span>my account</span>
          <Button
            label="close"
            onClick={onClose}
            primary={false}
            color={colors.dark}
          />
        </div>
        <div className="modal-body">
          <div className="flex">
            <span>wallet address</span>
            <Button
              label="disconnect"
              primary={false}
              onClick={handleDeactivateAccount}
              color={colors.dark}
            />
          </div>
          <span className="wallet-key">{account}</span>
          <div className="favorite-daos">
            <span>favorite dao’s</span>
            <ul>
              <li>
                <img src="/images/theGraph.png" />
                <span>TheGraph</span>
              </li>
              <li>
                <img src="/images/theGraph.png" />
                <span>TheGraph</span>
              </li>
              <li>
                <img src="/images/theGraph.png" />
                <span>TheGraph</span>
              </li>
              <li>
                <img src="/images/theGraph.png" />
                <span>TheGraph</span>
              </li>
              <li>
                <img src="/images/theGraph.png" />
                <span>TheGraph</span>
              </li>
            </ul>
          </div>
        </div>
      </ScModal>
    </Modal>
  )
}
