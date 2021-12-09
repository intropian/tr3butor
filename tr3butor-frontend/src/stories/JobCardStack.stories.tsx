import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { JobCardStack } from '../components/JobCardStack/JobCardStack'

export default {
  title: 'tr3butor/JobCardStack',
  component: JobCardStack
} as ComponentMeta<typeof JobCardStack>

const Template: ComponentStory<typeof JobCardStack> = (args) => (
  <JobCardStack {...args} />
)

export const Default = Template.bind({})
