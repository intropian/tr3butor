import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DaoCard } from '../components/DaoCard/DaoCard'
import { colors } from '../utilits/Colors'

export default {
  title: 'tr3butor/DaoCard',
  component: DaoCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof DaoCard>

const Template: ComponentStory<typeof DaoCard> = (args) => (
  <DaoCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'TheGraph',
  text: 'An open source portfolio tracker and analytics tool.',
  imageUrl: '/images/theGraph.png',
  backgroundColor: colors.orange,
  scenario: 'first',
  link: '/'
}
