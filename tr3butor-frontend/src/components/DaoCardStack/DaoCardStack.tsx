import React from 'react'
import { ScDaoCardStack } from './styled'
import { DaoCard } from '../DaoCard/DaoCard'
import ScrollContainer from 'react-indiana-drag-scroll'
import { DaoParams } from '../../types/dao'
import { randomItemFromArray } from '../../utilits/common'

interface DaoCardStackProps {
  type?: 'vertical' | 'horizontal';
  data: DaoParams[];
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
        {data.map(({ name, description, avatar, color, id }, key) => (
          <DaoCard
            link={`/dao/${id}`}
            key={key}
            title={name}
            text={description}
            imageUrl={avatar}
            backgroundColor={color}
            scenario={randomItemFromArray(['first', 'second', 'third'])}
          />
        ))}
      </ScrollContainer>
    </ScDaoCardStack>
  )
}
