import React from 'react'
import { ScHeader } from './styled'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import { Fox } from '../../libs/icons'
import { Menu } from '../Menu/Menu'
import { useRecoilState } from 'recoil'
import { AccountModalState } from '../../recoil/atoms/ModalAtom'
import { useEthers } from '@usedapp/core'
import Identicon from '../../libs/metamask/Identicon'

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
  const { activateBrowserWallet, account } = useEthers()
  const [, setModalData] = useRecoilState(AccountModalState)
  const handleConnectWallet = () => {
    activateBrowserWallet()
  }

  const getUserData = () =>
    setModalData({
      show: true,
      data: []
    })

  return (
      <div className="login-button">
        {!account
          ? (
                <Button
                    label={'connect wallet'}
                    onClick={() => handleConnectWallet()}
                    alignRight
                    primary
                    icon={<Fox />}
                />
            )
          : (
                <Button
                    label={'my account'}
                    onClick={getUserData}
                    alignRight
                    primary
                    simplify
                    icon={<Identicon />}
                />
            )}
      </div>
  )
}
