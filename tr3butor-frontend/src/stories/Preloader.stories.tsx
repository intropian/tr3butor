import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Preloader } from '../components/Preloader/Preloader'

export default {
  title: 'tr3butor/Preloader',
  component: Preloader
} as ComponentMeta<typeof Preloader>

const Template: ComponentStory<typeof Preloader> = (args) => (
  <Preloader {...args} />
)

export const Default = Template.bind({})
Default.args = {}
