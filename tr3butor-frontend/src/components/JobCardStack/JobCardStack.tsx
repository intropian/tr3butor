import React from 'react'
import { ScJobCardStack } from './styled'
import { JobCard } from '../JobCard/JobCard'
import { JobParams } from '../../types/job'
import { randomItemFromArray } from '../../utilits/common'
import { MasonryBlock } from '../MasonryBlock/MasonryBlock'

interface DaoCardStackProps {
  data: JobParams[];
}

export const JobCardStack: React.FC<DaoCardStackProps> = ({
  data,
  ...props
}) => {
  return (
    <ScJobCardStack>
        <MasonryBlock
          breakpoint={{
            default: 3,
            1000: 2,
            700: 1
          }}>
        {data?.map(({ title, description, dao, id }, key) => (
          <JobCard
            key={key}
            daoName={dao.name}
            type={'Job'}
            title={title}
            text={description}
            imageUrl={dao.avatar}
            backgroundColor="#06CA54"
            scenario={randomItemFromArray(['first', 'second', 'third'])}
            link={`/job/${id}`}
          />
        ))}
        </MasonryBlock>
    </ScJobCardStack>
  )
}
