import React, { Suspense } from 'react'
import { DecorBlocks } from '../DecorBlocks/DecorBlocks'
import { Button } from '../Button/Button'
import { Arrow, Discord, Globe, Grant, Hackathon, Job } from '../../libs/icons'
import { Preloader } from '../Preloader/Preloader'
import { ScJobHeader } from './styled'

interface JobHeaderProps {
  title: string;
  jobText: string;
  salary: string;
  addedOn: string;
  description?: string;
  imageUrl: string;
  backgroundColor?: string;
  website?: string;
  discord?: string;
  scenario?: 'first' | 'second' | 'third';
  type: 'Hackathon' | 'Job' | 'Grant';
}

// TODO: ASAP BRICK ON COMPONENTS AND DIVIDE IT IN STORIES!
export const JobHeader: React.FC<JobHeaderProps> = ({
  title,
  jobText,
  salary,
  addedOn,
  description,
  imageUrl,
  website,
  discord,
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
    <ScJobHeader color={backgroundColor}>
      <div className="container">
        <DecorBlocks scenario={scenario} />
        <div className="data">
          <div className="type flex">
            <i>{getIcon(type)}</i>
            <div>
              <span>{type}</span>
            </div>
          </div>
          <div className="description flex">
            <div className="text">
              Lead Growth & Community team to ensure Orakuru's leading market
              position, B2B clients acquisition and growth of token holders
            </div>
            <div className="control">
              <Button
                label="apply to job"
                simplify
                primary
                alignRight
                color="white"
                icon={<Arrow />}
              />
              <div className="tab flex">
                <div>
                  <span>salary</span>
                  <p>{salary}</p>
                </div>
                <div>
                  <span>added on</span>
                  <p>{addedOn}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="info flex">
            <div className="top flex">
              <Suspense fallback={<Preloader height="120px" width="140px" />}>
                <img src={imageUrl} alt={title} />
              </Suspense>
              <div>
                <h3>{title}</h3>
                <span>{description}</span>
              </div>
            </div>
            <div className="buttons">
              <Button
                label="page"
                simplify
                borderColor="white"
                primary={false}
              />
              <Button
                label="discord"
                simplify
                borderColor="white"
                onlyIcon
                icon={<Globe />}
              />
              <Button
                label="discord"
                simplify
                borderColor="white"
                onlyIcon
                icon={<Discord />}
              />
            </div>
          </div>
        </div>
      </div>
    </ScJobHeader>
  )
}
