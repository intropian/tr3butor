import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BlockHead } from '../components/BlockHead/BlockHead'

export default {
  title: 'tr3butor/BlockHead',
  component: BlockHead
} as ComponentMeta<typeof BlockHead>

const Template: ComponentStory<typeof BlockHead> = (args) => (
  <BlockHead {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'dao Explorer',
  text: 'Explore unlimited opportunities in unstoppable organizations'
}
