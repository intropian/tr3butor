import { Ticket } from '../../components/Ticket/Ticket'
import { ConnectTab } from '../../components/ConnectTab/ConnectTab'
import React, { useEffect } from 'react'
import { JobCardStack } from '../../components/JobCardStack/JobCardStack'
import { ScJobContainer } from './styled'
import { InfoStack } from '../../components/InfoStack/InfoStack'
import { useParams } from 'react-router'
import { TabHead } from '../../components/TabHead/TabHead'
import { JobHeader } from '../../components/JobHeader/JobHeader'
import { randomItemFromArray, shuffle } from '../../utilits/common'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { JobParams } from '../../types/job'
import { transformDataToBlockInfo } from 'utilits/transformDataToBlockInfo'
// TODO: REMOVE THIS TRASH! CHANGE LOGIC ON BACKEND
const daoInfoFields = ['salary_range', 'how_to_apply', 'responsibilities', 'role_mission', 'hard_skills_requirements',
  'soft_skills_requirements', 'culture_requirements', 'experience_requirements', 'education_requirements', 'work_conditions',
  'benefits', 'red_alerts', 'additional_role_benefits', 'location', 'timezone']

const mapName = (s:string) => s.replaceAll('_', ' ')

export const Job = () => {

  const params = useParams()
  const { getJob, getJobs } = useActions()
  const { jobsData } = useTypeSelector((state) => state.jobs)
  const { jobData } = useTypeSelector((state) => state.job)

  useEffect(() => {
    params.id && getJob(params.id)
    getJobs()
  }, [])
  let blocksInfo = null
  if (jobData) {
    const { dao, ...jobFields } = jobData
    blocksInfo = transformDataToBlockInfo(daoInfoFields, { ...jobFields })
  }
  return (
    <ScJobContainer>
      {jobData && (
        <JobHeader
          type="Job"
          jobText={jobData.title}
          salary={jobData.salary_range}
          addedOn={jobData.created_at}
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
      <InfoStack blocks={blocksInfo} />
      <TabHead
        title="similar quests"
        label="see all"
        url="quests"
      />
      <JobCardStack data={(shuffle(jobsData) as JobParams[]).slice(0, 5)} />
      <Ticket scenario={randomItemFromArray(['first', 'second', 'third'])} />
      <ConnectTab />
    </ScJobContainer>
  )
}
