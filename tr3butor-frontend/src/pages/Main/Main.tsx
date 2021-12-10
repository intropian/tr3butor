import { DaoCardStack } from '../../components/DaoCardStack/DaoCardStack'
import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import React from 'react'
import { ScMain } from './styled'
import { useRecoilValue } from 'recoil'
import { getAllDao } from '../../recoil/selectors/DaoSelector'

export const Main = () => {
  const data = useRecoilValue(getAllDao)
  return (
    <ScMain>
      <h2>dao Explorer</h2>
      <h6>Explore unlimited opportunities in unstoppable organizations</h6>
      <DaoCardStack data={data} />
      <Ticket />
      <ConnectTab />
    </ScMain>
  )
}
