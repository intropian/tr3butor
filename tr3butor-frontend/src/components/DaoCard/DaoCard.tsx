import React, { Suspense } from 'react'
import { ScDaoCard } from './styled'
import { DecorBlocks } from '../DecorBlocks/DecorBlocks'
import { Link } from 'react-router-dom'
import { Preloader } from '../Preloader/Preloader'

interface DaoCardProps {
  title: string;
  text: string;
  imageUrl: string;
  backgroundColor?: string;
  scenario?: 'first' | 'second' | 'third';
}

export const DaoCard: React.FC<DaoCardProps> = ({
  title,
  text,
  imageUrl,
  backgroundColor,
  scenario,
  ...props
}) => {
  return (
    <ScDaoCard color={backgroundColor}>
      <DecorBlocks scenario={scenario} />
      <div className="card-header">
        <Suspense fallback={<Preloader height="120px" width="120px" />}>
          <img alt={title} src={imageUrl} />
        </Suspense>
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <Link to="/dao">
        <i>➞</i>
      </Link>
    </ScDaoCard>
  )
}
