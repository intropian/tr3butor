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
        localStorage.removeItem('updated_auth') // just for demo
      })
    }
  }, [authStartData])

  useEffect(() => {
    const refreshToken = localStorage.getItem('refresh_token')
    const updated = localStorage.getItem('updated_auth') // just for demo
    if (!updated && refreshToken && account) {
      updateAuth(refreshToken, account)
      localStorage.setItem('updated_auth', '1') // just for demo
    }

  }, [authConfirmData, account])
}
