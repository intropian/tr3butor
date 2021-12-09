import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { colors } from '../utilits/Colors'
import { JobCard } from '../components/JobCard/JobCard'

export default {
  title: 'tr3butor/JobCard',
  component: JobCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof JobCard>

const Template: ComponentStory<typeof JobCard> = (args) => (
  <JobCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  daoName: 'Orakuru',
  title: 'Mint a minimum of 100 mUSD by converting stablecoins',
  text: 'An open source portfolio tracker and analytics tool.',
  imageUrl: '/images/theGraph.png',
  backgroundColor: colors.orange,
  scenario: 'first',
  type: 'Hackathon'
}
