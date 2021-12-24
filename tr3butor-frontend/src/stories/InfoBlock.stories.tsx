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
  content:
    'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. ',
}
