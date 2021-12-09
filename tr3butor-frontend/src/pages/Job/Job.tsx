import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import React from 'react'
import { JobCardStack } from '../../components/JobCardStack/JobCardStack'
import { ScJobContainer } from './styled'
import { InfoStack } from '../../components/InfoStack/InfoStack'
import { useNavigate } from 'react-router'
import { TabHead } from '../../components/TabHead/TabHead'
import { JobHeader } from '../../components/JobHeader/JobHeader'

export const Job = () => {
  const navigate = useNavigate()
  const redirectTo = () => {
    navigate('/quests', { replace: true })
  }
  return (
    <ScJobContainer>
      <JobHeader
        type="Job"
        jobText="Lead Growth & Community team to ensure Orakuru's leading market position, B2B clients acquisition and growth of token holders"
        salary="$3-5K /m"
        addedOn="01 dec 21"
        backgroundColor="#06CA54"
        description="Community Owned and Operated Oracle"
        discord="http://localhost"
        imageUrl="/images/orakuru.png"
        scenario="first"
        title="Orakuru"
        website="http://localhost"
      />
      <InfoStack />
      <TabHead title="related quests" label="all quests" onClick={redirectTo} />
      <JobCardStack />
      <Ticket />
      <ConnectTab />
    </ScJobContainer>
  )
}
