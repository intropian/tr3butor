import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TabHead } from '../components/TabHead/TabHead'

export default {
  title: 'tr3butor/TabHead',
  component: TabHead
} as ComponentMeta<typeof TabHead>

const Template: ComponentStory<typeof TabHead> = (args) => (
  <TabHead {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'related dao’s',
  label: 'all quests'
}
