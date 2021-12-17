import React, { Suspense } from 'react'
import { ScDaoCard } from './styled'
import { DecorBlocks } from '../DecorBlocks/DecorBlocks'
import { Preloader } from '../Preloader/Preloader'
import { cutSentences } from '../../utilits/common'
import { Link } from 'react-router-dom'

interface DaoCardProps {
  title: string;
  text: string;
  imageUrl: string;
  backgroundColor?: string;
  link: string;
  scenario?: 'first' | 'second' | 'third';
}

export const DaoCard: React.FC<DaoCardProps> = ({
  title,
  text,
  imageUrl,
  backgroundColor,
  scenario,
  link,
  ...props
}) => {
  return (
    <ScDaoCard color={backgroundColor}>
      <Link to={link}>
        <div>
          <DecorBlocks scenario={scenario} />
          <div className="card-header">
            <Suspense fallback={<Preloader height="120px" width="120px" />}>
              <img alt={title} src={imageUrl} />
            </Suspense>
          </div>
          <div className="card-content">
            <h4>{title}</h4>
            <p>{text && cutSentences(text, 100)}</p>
          </div>
          <span>
            <i>➞</i>
          </span>
        </div>
      </Link>
    </ScDaoCard>
  )
}
