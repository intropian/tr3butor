import React, { useEffect, useState } from 'react'
import { ScHeader } from './styled'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import { Fox } from '../../libs/icons'
import { Menu } from '../Menu/Menu'
import { useEthers } from '@usedapp/core'
import Identicon from '../../libs/metamask/Identicon'
import { AccountModal } from '../Modal/AccountModal'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'

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

  const { activateBrowserWallet, account, library } = useEthers()

  const { data: authStartData, loading: authStartLoading, error: authStartError } = useTypeSelector(
    (state) => state.authStart
  )
  const { data: authConfirmData, loading: authСonfirmLoading, error: authConfirmError } = useTypeSelector(
    (state) => state.authConfirm
  )
  const { startAuth, confirmAuth } = useActions()

  useEffect(() => {
    if(authStartData && library && account && !authConfirmData) {
      const signer = library.getSigner()
      signer.signMessage(authStartData.nonce).then(signed => {
        confirmAuth(account, signed)
      })
    }
  }, [authStartData])
  useEffect(() => {
    console.log('authConfirmData', authConfirmData) // it is already in store but we should attach somehow to be used in axios calls
  }, [authConfirmData])

  const handleConnectWallet = () => {
    activateBrowserWallet()

  }
  const loginBackend = () => {
    if(account != null) {
      console.log('startAuth')
      startAuth(account)
      console.log('end startAuth')
    }
  }

  let button = null
  if(!account) {
    button = <Button
    label={'connect wallet'}
    onClick={() => handleConnectWallet()}
    alignRight
    primary
    simplify
    icon={<Fox />}
  />
  } else if (!authConfirmData) {
    button = <Button
    label={'Login to backend'}
    // onClick={() => setShowModal(true)}
    onClick={() => loginBackend()}
    alignRight
    primary
    simplify
    icon={<Identicon />}
  />
  } else {
    button = <Button
    label={'My Account'}
    onClick={() => setShowModal(true)}
    alignRight
    primary
    simplify
    icon={<Identicon />}
  />
  }

  return (
    <div className="login-button">
      {button}
      {showModal && <AccountModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
