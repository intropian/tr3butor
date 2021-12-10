import { DaoCardStack } from '../../components/DaoCardStack/DaoCardStack'
import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import React from 'react'
import { ScMain } from './styled'

export const Main = () => {
  return (
    <ScMain>
      <h2>dao Explorer</h2>
      <h6>Explore unlimited opportunities in unstoppable organizations</h6>
      <DaoCardStack />
      <Ticket />
      <ConnectTab />
    </ScMain>
  )
}
