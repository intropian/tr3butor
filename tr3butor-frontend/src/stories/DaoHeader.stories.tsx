import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DaoHeader } from '../components/DaoHeader/DaoHeader'

export default {
  title: 'tr3butor/DaoHeader',
  component: DaoHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof DaoHeader>

const Template: ComponentStory<typeof DaoHeader> = (args) => (
  <DaoHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Orakuru',
  description: 'Community Owned and Operated Oracle',
  imageUrl: 'https://tr3butor.selin.in.ua/logos/dxdao.png',
  backgroundColor: '#D21752',
  scenario: 'first',
  tags: ['#oracle', '#defi', '#solana'],
  website: 'http://localhost',
  discord: 'http://localhost'
}
