import { useEffect } from 'react'
import { useActions } from './useActions'
import { useTypeSelector } from './useTypeSelector'
import { useEthers } from '@usedapp/core'

export function useSignUser() {
  const { confirmAuth, updateAuth } = useActions()
  const { account, library } = useEthers()
  const { data: authConfirmData } = useTypeSelector(
    (state) => state.authConfirm
  )
  const { data: authStartData } = useTypeSelector(
    (state) => state.authStart
  )

  useEffect(() => {
    if (authStartData && library && account && !authConfirmData) {
      const signer = library.getSigner()
      signer.signMessage(authStartData.nonce).then(signed => {
        confirmAuth(account, signed)
      })
    }
  }, [authStartData])

  useEffect(() => {
    const accessToken = localStorage.getItem('bearer_token')
    const expiresIn = localStorage.getItem('expires_in')
    const account = localStorage.getItem('account')
    if (accessToken && expiresIn && account)
      updateAuth(accessToken, expiresIn, account)

  }, [])
}
