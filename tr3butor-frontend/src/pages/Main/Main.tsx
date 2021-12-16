import { DaoCardStack } from '../../components/DaoCardStack/DaoCardStack'
import React, { useEffect } from 'react'
import { ScMain } from './styled'
import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'
import { randomItemFromArray } from '../../utilits/common'
import { BlockHead } from '../../components/BlockHead/BlockHead'

export const Main = () => {
  const { data } = useTypeSelector((state) => state.dao)
  const { getDao } = useActions()

  useEffect(() => {
    getDao()
  }, [])
  // TODO: MAKE HEADER TAB LIKE COMPONENT
  return (
    <ScMain>
      <BlockHead title="dao Explorer" text="Explore unlimited opportunities in unstoppable organizations" />
      {data && <DaoCardStack data={data} />}
      <Ticket scenario={randomItemFromArray(['first', 'second', 'third'])} />
      <ConnectTab />
    </ScMain>
  )
}
