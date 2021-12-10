import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import React, { useEffect } from 'react'
import { Ticket } from '../../components/Ticket/Ticket'
import { JobCardStack } from '../../components/JobCardStack/JobCardStack'
import { InfoStack } from '../../components/InfoStack/InfoStack'
import { DaoHeader } from '../../components/DaoHeader/DaoHeader'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { headerColorState } from '../../recoil/atoms/HeaderAtom'
import { TabHead } from '../../components/TabHead/TabHead'
import { useNavigate } from 'react-router'
import { DaoCardStack } from '../../components/DaoCardStack/DaoCardStack'

export const Dao = () => {
  const [, setHeaderColorState] = useRecoilState(headerColorState)
  const reset = useResetRecoilState(headerColorState)

  const navigate = useNavigate()
  const redirectTo = () => {
    navigate('/', { replace: true })
  }

  useEffect(() => {
    setHeaderColorState('#e01052')
    return function () {
      reset()
    }
  }, [])
  return (
    <>
      <DaoHeader
        backgroundColor="#e01052"
        description="Community Owned and Operated Oracle"
        discord="http://localhost"
        imageUrl="/images/orakuru.png"
        scenario="second"
        tags={['#oracle', '#defi', '#solana']}
        title="Orakuru"
        website="http://localhost"
      />
      <JobCardStack />
      <InfoStack />
      <TabHead
        title="related dao’s"
        label="dao’s catalog"
        onClick={redirectTo}
      />
      <DaoCardStack type={'horizontal'} />
      <Ticket />
      <ConnectTab />
    </>
  )
}
