import React from 'react'
import { ScDaoCardStack } from './styled'
import { DaoCard } from '../DaoCard/DaoCard'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Dao } from '../../types/dao'

interface DaoCardStackProps {
  type?: 'vertical' | 'horizontal';
  data?: Dao[];
}

export const DaoCardStack: React.FC<DaoCardStackProps> = ({
  type = 'vertical',
  data,
  ...props
}) => {
  if (!data) return <></>
  return (
    <ScDaoCardStack className={type}>
      <ScrollContainer
        vertical={false}
        className={[
          'container',
          type === 'horizontal' ? 'scroll-container' : ''
        ].join(' ')}
      >
        {data.map(({ name, description, icon, color, id }, key) => (
          <DaoCard
            link={`/dao/${id}`}
            key={key}
            title={name}
            text={description}
            imageUrl={icon}
            backgroundColor={color}
            scenario={'first'}
          />
        ))}
      </ScrollContainer>
    </ScDaoCardStack>
  )
}
