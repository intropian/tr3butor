import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DaoCardStack } from '../components/DaoCardStack/DaoCardStack'

export default {
  title: 'tr3butor/DaoCardStack',
  component: DaoCardStack
} as ComponentMeta<typeof DaoCardStack>

const Template: ComponentStory<typeof DaoCardStack> = (args) => (
  <DaoCardStack {...args} />
)

export const Vertical = Template.bind({})
Vertical.args = {
  type: 'vertical'
}

export const Horizontal = Template.bind({})

Horizontal.args = {
  type: 'horizontal'
}
