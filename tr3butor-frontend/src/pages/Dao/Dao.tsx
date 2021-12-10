import React from 'react'
import { DaoHeader } from '../../components/DaoHeader/DaoHeader'
import { useNavigate, useParams } from 'react-router'
import { JobCardStack } from '../../components/JobCardStack/JobCardStack'
import { InfoStack } from '../../components/InfoStack/InfoStack'
import { TabHead } from '../../components/TabHead/TabHead'
import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import { DaoCardStack } from '../../components/DaoCardStack/DaoCardStack'

export const Dao = () => {
  const navigate = useNavigate()
  const redirectTo = () => {
    navigate('/', { replace: true })
  }

  const params = useParams()

  return (
    <>
      <DaoHeader
        backgroundColor="#e01052"
        description="Community Owned and Oper
          ted Oracle"
        discord="http://localhost"
        imageUrl="/images/orakuru.png"
        scenario="second"
        tags={['#oracle', '#defi', '#solana']}
        title="Orakuru"
        website="http://localhost"
      />
      )
      <JobCardStack />
      <InfoStack />
      <TabHead
        title="related dao’s"
        label="dao’s catalog"
        onClick={redirectTo}
      />
      <DaoCardStack data={[]} type={'horizontal'} />
      <Ticket />
      <ConnectTab />
    </>
  )
}
