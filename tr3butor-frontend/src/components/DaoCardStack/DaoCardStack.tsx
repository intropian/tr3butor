import React from 'react'
import { ScDaoCardStack } from './styled'
import { DaoCard } from '../DaoCard/DaoCard'
import { colors } from '../../utilits/Colors'
import ScrollContainer from 'react-indiana-drag-scroll'

interface DaoCardStackProps {
  type?: 'vertical' | 'horizontal';
}

export const DaoCardStack: React.FC<DaoCardStackProps> = ({
  type = 'vertical',
  ...props
}) => {
  return (
    <ScDaoCardStack className={type}>
      <ScrollContainer
        vertical={false}
        className={[
          'container',
          type === 'horizontal' ? 'scroll-container' : ''
        ].join(' ')}
      >
        <DaoCard
          title={'TheGraph'}
          text={'An open source portfolio tracker and analytics tool.'}
          imageUrl={'/images/theGraph.png'}
          backgroundColor={colors.orange}
          scenario={'first'}
        />
        <DaoCard
          title={'Yearn'}
          text={'An open source portfolio tracker and analytics tool.'}
          imageUrl={'/images/yearn.png'}
          backgroundColor={colors.green}
          scenario={'second'}
        />
        <DaoCard
          title={'OpenSea'}
          text={'An open source portfolio tracker and analytics tool.'}
          imageUrl={'/images/openSea.png'}
          backgroundColor={colors.mint}
          scenario={'third'}
        />

        <DaoCard
          title={'Uniswap'}
          text={'An open source portfolio tracker and analytics tool.'}
          imageUrl={'/images/uniswap.png'}
          backgroundColor={colors.mint}
          scenario={'first'}
        />
        <DaoCard
          title={'Compound'}
          text={'An open source portfolio tracker and analytics tool.'}
          imageUrl={'/images/compound.png'}
          backgroundColor={colors.orange}
          scenario={'third'}
        />
        <DaoCard
          title={'Snapshot'}
          text={'An open source portfolio tracker and analytics tool.'}
          imageUrl={'/images/snapshot.png'}
          backgroundColor={colors.green}
          scenario={'first'}
        />
        <DaoCard
          title={'Orakuru'}
          text={'An open source portfolio tracker and analytics tool.'}
          imageUrl={'/images/orakuru.png'}
          backgroundColor={colors.green}
          scenario={'second'}
        />
      </ScrollContainer>
    </ScDaoCardStack>
  )
}
