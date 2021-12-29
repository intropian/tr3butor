import React, { useEffect, useRef } from 'react'
import Jazzicon from '@metamask/jazzicon'
import styled from '@emotion/styled'

const StyledIdenticon = styled.div`
  margin-top: -2px;
  height: 36px;
  padding-top: 2px;
  padding-right: 2px;
  width: 36px;
  background-color: #fdfdfe;
  border-radius: 1.125rem;
`

interface IdenticonProps {
  account: string
}

export default function Identicon({ account }: IdenticonProps) {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(Jazzicon(32, parseInt(account.slice(2, 10), 16)))
    }
  }, [account])

  return <StyledIdenticon className={'identicon'} ref={ref as any} />
}
