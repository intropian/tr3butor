import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Ticket } from '../components/Ticket/Ticket'

export default {
  title: 'tr3butor/Ticket',
  component: Ticket
} as ComponentMeta<typeof Ticket>

const Template: ComponentStory<typeof Ticket> = (args) => <Ticket {...args} />

export const Default = Template.bind({})
