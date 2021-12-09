import React, { Suspense } from 'react'
import { DecorBlocks } from '../DecorBlocks/DecorBlocks'
import { Link } from 'react-router-dom'
import { ScJobCard } from './styled'

import { Grant, Hackathon, Job } from '../../libs/icons'
import { Preloader } from '../Preloader/Preloader'

interface JobCardProps {
  title: string;
  daoName: string;
  text: string;
  imageUrl: string;
  backgroundColor?: string;
  scenario?: 'first' | 'second' | 'third';
  type: 'Hackathon' | 'Job' | 'Grant';
}

export const JobCard: React.FC<JobCardProps> = ({
  title,
  daoName,
  text,
  imageUrl,
  backgroundColor,
  scenario,
  type,
  ...props
}) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Hackathon':
        return <Hackathon />
      case 'Job':
        return <Job />
      case 'Grant':
        return <Grant />
      default:
        return false
    }
  }
  return (
    <ScJobCard color={backgroundColor}>
      <DecorBlocks scenario={scenario} />
      <div className="card-header flex">
        <Suspense fallback={<Preloader height="60px" width="60px" />}>
          <img alt={title} src={imageUrl} />
        </Suspense>
        <span>{daoName}</span>
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="type flex">
        <i>{getIcon(type)}</i>
        <div>
          <span>{type}</span>
        </div>
      </div>
      <Link to="/job">
        <i>➞</i>
      </Link>
    </ScJobCard>
  )
}
