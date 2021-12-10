import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import React, { useEffect } from 'react'
import { Ticket } from '../../components/Ticket/Ticket'
import { JobCardStack } from '../../components/JobCardStack/JobCardStack'
import { InfoStack } from '../../components/InfoStack/InfoStack'
import { DaoHeader } from '../../components/DaoHeader/DaoHeader'
import { TabHead } from '../../components/TabHead/TabHead'
import { useNavigate, useParams } from 'react-router'
import { DaoCardStack } from '../../components/DaoCardStack/DaoCardStack'
import { useRecoilState, useRecoilValue } from 'recoil'
import { selectedDaoState } from '../../recoil/atoms/DaoAtom'
import { getSelectedDao } from '../../recoil/selectors/DaoSelector'

export const Dao = () => {
  const navigate = useNavigate()
  const redirectTo = () => {
    navigate('/', { replace: true })
  }

  const params = useParams()

  const [_selectedDaoState, setSelectedDaoState] =
    useRecoilState(selectedDaoState)
  const data = useRecoilValue(getSelectedDao)

  useEffect(() => {
    params.id && setSelectedDaoState(params.id)
  })
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
      <DaoCardStack data={[]} type={'horizontal'} />
      <Ticket />
      <ConnectTab />
    </>
  )
}
