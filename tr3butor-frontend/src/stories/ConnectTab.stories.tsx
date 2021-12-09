import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ConnectTab } from '../components/ConnectTab/ConnectTab'

export default {
  title: 'tr3butor/ConnectTab',
  component: ConnectTab
} as ComponentMeta<typeof ConnectTab>

const Template: ComponentStory<typeof ConnectTab> = (args) => (
  <ConnectTab {...args} />
)

export const Default = Template.bind({})
