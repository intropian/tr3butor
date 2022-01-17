import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { InfoStack } from '../components/InfoStack/InfoStack'

export default {
  title: 'tr3butor/InfoStack',
  component: InfoStack
} as ComponentMeta<typeof InfoStack>

const Template: ComponentStory<typeof InfoStack> = (args) => (
  <InfoStack {...args} />
)

export const Default = Template.bind({})

Default.args = {
  blocks: [{
    title: 'mission',
    content:
      'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. '
  },
    {
      title: 'mission',
      content:
        'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. '
    },
    {
      title: 'mission',
      content:
        'Orakuru is aiming to  become a leading multi-chain oracle, and the first one fully decentralized, community owned and governed. '
    }
  ]
}
