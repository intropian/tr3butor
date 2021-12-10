import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Header } from '../components/Header/Header'

export default {
  title: 'tr3butor/Header',
  component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
