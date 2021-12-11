import React, { useEffect } from 'react'
import { DaoHeader } from '../../components/DaoHeader/DaoHeader'
import { useNavigate, useParams } from 'react-router'
import { JobCardStack } from '../../components/JobCardStack/JobCardStack'
import { InfoStack } from '../../components/InfoStack/InfoStack'
import { TabHead } from '../../components/TabHead/TabHead'
import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import { DaoCardStack } from '../../components/DaoCardStack/DaoCardStack'
import { changeTo, randomItemFromArray, shuffle } from '../../utilits/common'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'
import { DaoParams } from '../../types/dao'

export const Dao = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { data } = useTypeSelector((state) => state.dao)

  const { certainDaoData, certainDaoLoading } = useTypeSelector(
    (state) => state.certainDao
  )
  const { daoJobsData, daoJobsLoading } = useTypeSelector(
    (state) => state.daoJobs
  )
  const { getCertainDao, getDaoJobs, getDao } = useActions()
  useEffect(() => {
    params.id && getCertainDao(params.id) && getDaoJobs(params.id)
    getDao()
  }, [])
  return (
    <>
      {certainDaoData && !certainDaoLoading && (
        <DaoHeader
          backgroundColor={certainDaoData.color}
          description={certainDaoData.description}
          discord={certainDaoData.link_discord}
          imageUrl={certainDaoData.avatar}
          scenario="second"
          tags={certainDaoData.tags?.split(',')}
          title={certainDaoData.name}
          website={certainDaoData.link_website}
        />
      )}
      {daoJobsData && !daoJobsLoading && <JobCardStack data={daoJobsData} />}
      <InfoStack />
      <TabHead
        title="related dao’s"
        label="dao’s catalog"
        onClick={() => changeTo(navigate, '/')}
      />
      {
        // TODO: make real request
      }
      <DaoCardStack data={shuffle(data) as DaoParams[]} type={'horizontal'} />
      <Ticket scenario={randomItemFromArray(['first', 'second', 'third'])} />
      <ConnectTab />
    </>
  )
}
