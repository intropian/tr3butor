import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import React from 'react'
import { JobCardStack } from '../../components/JobCardStack/JobCardStack'

export const Quests = () => {
  return (
    <>
      <JobCardStack />
      <Ticket />
      <ConnectTab />
    </>
  )
}
