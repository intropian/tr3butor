import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { InfoBlock } from '../components/InfoBlock/InfoBlock'

export default {
  title: 'tr3butor/InfoBlock',
  component: InfoBlock
} as ComponentMeta<typeof InfoBlock>

const Template: ComponentStory<typeof InfoBlock> = (args) => (
  <InfoBlock {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'mission',
  content: [
    'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. ',
    'We are working hard to make Orakuru top-3 oracles by the market cap and the number of clients in the next 3 years (before 2024).',
    'It will happen thanks to the tech team innovations and execution, smart and brave marketing management and powerful and loyal community.'
  ]
}
