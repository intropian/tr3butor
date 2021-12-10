import { DaoCardStack } from '../../components/DaoCardStack/DaoCardStack'
import React, { useEffect } from 'react'
import { ScMain } from './styled'
import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'

export const Main = () => {
  const { data } = useTypeSelector((state) => state.dao)
  const { getDao } = useActions()

  useEffect(() => {
    getDao()
  }, [])
  return (
    <ScMain>
      <h2>dao Explorer</h2>
      <h6>Explore unlimited opportunities in unstoppable organizations</h6>
      {data && <DaoCardStack data={data} />}
      <Ticket />
      <ConnectTab />
    </ScMain>
  )
}
