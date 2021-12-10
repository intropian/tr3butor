import { DaoCardStack } from '../../components/DaoCardStack/DaoCardStack'
import React from 'react'
import { ScMain } from './styled'
import { useRecoilStateLoadable } from 'recoil'
import { DaosState } from '../../recoil/atoms/DaoAtom'
import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'

export const Main = () => {
  const [data] = useRecoilStateLoadable(DaosState)
  return (
    <ScMain>
      <h2>dao Explorer</h2>
      <h6>Explore unlimited opportunities in unstoppable organizations</h6>
      {data.state === 'hasValue' && <DaoCardStack data={data.contents} />}
      <Ticket />
      <ConnectTab />
    </ScMain>
  )
}
