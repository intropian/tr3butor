import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { JobHeader } from '../components/JobHeader/JobHeader'

export default {
  title: 'tr3butor/JobHeader',
  component: JobHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof JobHeader>

const Template: ComponentStory<typeof JobHeader> = (args) => (
  <JobHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Orakuru',
  description: 'Community Owned and Operated Oracle',
  imageUrl: 'https://tr3butor.selin.in.ua/logos/dxdao.png',
  backgroundColor: '#D21752',
  scenario: 'first',
  website: 'http://localhost',
  discord: 'http://localhost',
  jobText:
    "Lead Growth & Community team to ensure Orakuru's leading market position, B2B clients acquisition and growth of token holders",
  salary: '$3-5K /m',
  addedOn: '01 dec 21',
  type: 'Hackathon'
}
