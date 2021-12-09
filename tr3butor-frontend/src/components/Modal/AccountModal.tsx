import React from 'react'
import { Modal } from 'components/Modal/Modal'
import { ScModal } from './styled'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { AccountModalState } from '../../recoil/atoms/ModalAtom'
import { Button } from '../Button/Button'
import { colors } from '../../utilits/Colors'
import { useEthers } from '@usedapp/core'

export const AccountModal: React.FC = () => {
  const hide = useResetRecoilState(AccountModalState)
  const [_] = useRecoilState(AccountModalState)

  const { account, deactivate } = useEthers()
  const handleDeactivateAccount = () => {
    deactivate()
    hide()
  }

  if (!_.show) {
    return <></>
  }
  return (
    <Modal onClose={hide}>
      <ScModal>
        <div className="modal-header flex">
          <span>my account</span>
          <Button
            label="close"
            onClick={hide}
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
