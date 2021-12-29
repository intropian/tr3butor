import React, { useEffect, useState } from 'react'
import { ScHeader } from './styled'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import { Fox } from '../../libs/icons'
import { Menu } from '../Menu/Menu'
import { useEthers } from '@usedapp/core'
import Identicon from '../../libs/metamask/Identicon'
import { AccountModal } from '../Modal/AccountModal'
import { useActions } from 'hooks/useActions'


export const Header = () => {
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

  const { startAuth } = useActions()


  useEffect(() => {
    if (account)
      startAuth(account)
  }, [account])


  const showModalCallback = () => {
    setShowModal(true)
  }

  return (
    <div className="login-button">
      {!localStorage.getItem('account') ? <Button
        label={'connect wallet'}
        onClick={() => activateBrowserWallet()}
        alignRight
        primary
        simplify
        icon={<Fox />}
      /> : <Button
        label={'My Account'}
        onClick={() => showModalCallback()}
        alignRight
        primary
        simplify
        icon={<Identicon account={localStorage.getItem('account') || ''} />}
      />}
      {showModal && <AccountModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
