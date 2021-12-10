import React from 'react'
import { ScJobCardStack } from './styled'
import { JobCard } from '../JobCard/JobCard'

interface DaoCardStackProps {}

export const JobCardStack: React.FC<DaoCardStackProps> = ({ ...props }) => {
  return (
    <ScJobCardStack>
      <div className="container">
        <JobCard
          daoName={'Orakuru'}
          type={'Hackathon'}
          title={'Mint a minimum of 100 mUSD by converting stablecoins'}
          text={
            'mUSD is a basket of stablecoins that can be minted by swapping any ...'
          }
          imageUrl={'/images/orakuru.png'}
          backgroundColor="#29C295"
          scenario={'first'}
        />
        <JobCard
          daoName={'Orakuru'}
          type={'Job'}
          title={'Turn your mUSD into imUSD'}
          text={
            'Convert your mUSD into the interest-accruing stablecoin version of ...'
          }
          imageUrl={'/images/orakuru.png'}
          backgroundColor="#06CA54"
          scenario={'second'}
        />
        <JobCard
          daoName={'Orakuru'}
          type={'Grant'}
          title={'Swap on Uniswap'}
          text={'Swap on Uniswap'}
          imageUrl={'/images/orakuru.png'}
          backgroundColor="#22ACCA"
          scenario={'third'}
        />
        <JobCard
          daoName={'Orakuru'}
          type={'Job'}
          title={'Swap on Uniswap'}
          text={'Swap on Uniswap'}
          imageUrl={'/images/orakuru.png'}
          backgroundColor="#06CA54;"
          scenario={'third'}
        />
        <JobCard
          daoName={'Orakuru'}
          type={'Grant'}
          title={'Turn your mUSD into imUSD'}
          text={
            'Convert your mUSD into the interest-accruing stablecoin version of ...'
          }
          imageUrl={'/images/orakuru.png'}
          backgroundColor="#22ACCA;"
          scenario={'first'}
        />
        <JobCard
          daoName={'Orakuru'}
          type={'Hackathon'}
          title={'Mint a minimum of 100 mUSD by converting stablecoins'}
          text={
            'mUSD is a basket of stablecoins that can be minted by swapping any ...'
          }
          imageUrl={'/images/orakuru.png'}
          backgroundColor="#29C295"
          scenario={'second'}
        />
      </div>
    </ScJobCardStack>
  )
}
