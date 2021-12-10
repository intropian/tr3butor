import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Footer } from '../components/Footer/Footer'

export default {
  title: 'tr3butor/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
