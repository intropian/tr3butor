import React, { useState } from 'react'
import { ScHeader } from './styled'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import { Fox } from '../../libs/icons'
import { Menu } from '../Menu/Menu'
import { useEthers } from '@usedapp/core'
import Identicon from '../../libs/metamask/Identicon'
import { AccountModal } from '../Modal/AccountModal'

interface HeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <ScHeader>
      <div className="top-flex">
        <Logo animated={true} />
        <Menu />
        <LoginButton />
      </div>
    </ScHeader>
  )
}

const LoginButton = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const { activateBrowserWallet, account } = useEthers()
  const handleConnectWallet = () => {
    activateBrowserWallet()
  }

  return (
    <div className="login-button">
      {!account
        ? (
        <Button
          label={'connect wallet'}
          onClick={() => handleConnectWallet()}
          alignRight
          primary
          simplify
          icon={<Fox />}
        />
          )
        : (
        <Button
          label={'my account'}
          onClick={() => setShowModal(true)}
          alignRight
          primary
          simplify
          icon={<Identicon />}
        />
          )}

      {showModal && <AccountModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
