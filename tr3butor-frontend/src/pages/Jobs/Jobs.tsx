import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import React, { useEffect } from 'react'
import { JobCardStack } from '../../components/JobCardStack/JobCardStack'
import { randomItemFromArray } from '../../utilits/common'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'
import { ScMain } from '../Main/styled'
import { BlockHead } from '../../components/BlockHead/BlockHead'

export const Jobs = () => {
  const { jobsData } = useTypeSelector((state) => state.jobs)
  const { getJobs } = useActions()
  useEffect(() => {
    getJobs()
  }, [])
  return (
    <ScMain>
      <BlockHead title="quests Explorer" text="Explore unlimited opportunities in unstoppable organizations" />
      <br />
      <JobCardStack data={jobsData} />
      <Ticket scenario={randomItemFromArray(['first', 'second', 'third'])} />
      <ConnectTab />
    </ScMain>
  )
}
