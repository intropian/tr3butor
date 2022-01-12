import React, { useEffect } from 'react'
import { DaoHeader } from '../../components/DaoHeader/DaoHeader'
import { useParams } from 'react-router'
import { JobCardStack } from '../../components/JobCardStack/JobCardStack'
import { InfoStack } from '../../components/InfoStack/InfoStack'
import { TabHead } from '../../components/TabHead/TabHead'
import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import { DaoCardStack } from '../../components/DaoCardStack/DaoCardStack'
import { randomItemFromArray, shuffle } from '../../utilits/common'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'
import { DaoParams } from '../../types/dao'

export const Dao = () => {
  const params = useParams()
  const { relatedDaoData } = useTypeSelector((state) => state.relatedDao)

  const { certainDaoData, certainDaoLoading } = useTypeSelector(
    (state) => state.certainDao
  )
  const { daoJobsData, daoJobsLoading } = useTypeSelector(
    (state) => state.daoJobs
  )
  const { getCertainDao, getDaoJobs, getRelatedDao } = useActions()
  useEffect(() => {
    params.id && getCertainDao(params.id) && getDaoJobs(params.id)
    getRelatedDao()
  }, [])

  return (
    <>
      {certainDaoData && !certainDaoLoading && (
        <DaoHeader
          daoId={certainDaoData.id}
          backgroundColor={certainDaoData.color}
          description={certainDaoData.description}
          discord={certainDaoData.link_discord}
          imageUrl={certainDaoData.avatar}
          scenario="second"
          tags={certainDaoData.tags?.split(',')}
          title={certainDaoData.name}
          website={certainDaoData.link_website}
          founded={certainDaoData.date_founded}
          tvl={certainDaoData.metric_tvl}
          mcap={certainDaoData.metric_mcap}
          volume={certainDaoData.metric_volume}
        />
      )}
      {daoJobsData && !daoJobsLoading && <JobCardStack data={daoJobsData} />}
      {certainDaoData && <InfoStack blocks={certainDaoData.text_blocks} />}
      <TabHead
        title="similar DAO"
        label="see all"
        url="/"
      />
      <DaoCardStack data={(shuffle(relatedDaoData) as DaoParams[]).slice(0, 8)} type={'horizontal'} />
      <Ticket scenario={randomItemFromArray(['first', 'second', 'third'])} />
      <ConnectTab />
    </>
  )
}
