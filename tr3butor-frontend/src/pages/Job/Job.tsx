import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import React, { useEffect } from 'react'
import { JobCardStack } from '../../components/JobCardStack/JobCardStack'
import { ScJobContainer } from './styled'
import { InfoStack } from '../../components/InfoStack/InfoStack'
import { useNavigate, useParams } from 'react-router'
import { TabHead } from '../../components/TabHead/TabHead'
import { JobHeader } from '../../components/JobHeader/JobHeader'
import { changeTo, randomItemFromArray, shuffle } from '../../utilits/common'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { JobParams } from '../../types/job'

export const Job = () => {
  const navigate = useNavigate()

  const params = useParams()
  const { getJob, getJobs } = useActions()
  const { jobsData } = useTypeSelector((state) => state.jobs)
  const { jobData } = useTypeSelector((state) => state.job)

  useEffect(() => {
    params.id && getJob(params.id)
    getJobs()
  }, [])
  return (
    <ScJobContainer>
      {jobData && (
        <JobHeader
          type="Job"
          jobText={jobData.title}
          salary={jobData.salary_range}
          addedOn="01 dec 21"
          backgroundColor="#06CA54"
          description={jobData.dao.description}
          imageUrl={jobData.dao.avatar}
          scenario={randomItemFromArray(['first', 'second', 'third'])}
          title={jobData.dao.name}
          website={jobData.dao.link_website}
          discord={jobData.dao.link_discord}
          daoUrl={'/dao/' + jobData.dao.id}
        />
      )}
      <InfoStack />
      <TabHead
        title="related quests"
        label="all quests"
        onClick={() => changeTo(navigate, '/quests')}
      />
      <JobCardStack data={shuffle(jobsData) as JobParams[]} />
      <Ticket scenario={randomItemFromArray(['first', 'second', 'third'])} />
      <ConnectTab />
    </ScJobContainer>
  )
}
