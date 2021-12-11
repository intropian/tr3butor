import React from 'react'
import { ScInfoStack } from './styled'
import { InfoBlock } from '../InfoBlock/InfoBlock'

export const InfoStack: React.FC = ({ ...props }) => {
  return (
    <ScInfoStack className="flex">
      <InfoBlock
        content={[
          'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. ',
          'We are working hard to make Orakuru top-3 oracles by the market cap and the number of clients in the next 3 years (before 2024).',
          'It will happen thanks to the tech team innovations and execution, smart and brave marketing management and powerful and loyal community.'
        ]}
        title="mission"
      />

      <InfoBlock
        content={[
          'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. ',
          'We are working hard to make Orakuru top-3 oracles by the market cap and the number of clients in the next 3 years (before 2024).',
          'It will happen thanks to the tech team innovations and execution, smart and brave marketing management and powerful and loyal community.'
        ]}
        title="brief history"
      />

      <InfoBlock
        content={[
          'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. ',
          'We are working hard to make Orakuru top-3 oracles by the market cap and the number of clients in the next 3 years (before 2024).',
          'It will happen thanks to the tech team innovations and execution, smart and brave marketing management and powerful and loyal community.'
        ]}
        title="benefits for contributors"
      />
      <InfoBlock
        content={[
          'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. ',
          'We are working hard to make Orakuru top-3 oracles by the market cap and the number of clients in the next 3 years (before 2024).',
          'It will happen thanks to the tech team innovations and execution, smart and brave marketing management and powerful and loyal community.'
        ]}
        title="culture & values"
      />

      <InfoBlock
        content={[
          'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. ',
          'It will happen thanks to the tech team innovations and execution, smart and brave marketing management and powerful and loyal community.'
        ]}
        title="core team"
      />

      <InfoBlock
        content={[
          'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. '
        ]}
        title="why it is great place to work"
      />
      <InfoBlock content={['Mostly Europe']} title="timezones" />
    </ScInfoStack>
  )
}
