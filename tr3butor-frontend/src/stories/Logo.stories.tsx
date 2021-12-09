import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo } from '../components/Logo/Logo'

export default {
  title: 'tr3butor/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Static = Template.bind({})

export const Animated = Template.bind({})
Animated.args = {
  animated: true,
  msInterval: 1000
}
