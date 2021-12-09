import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from 'components/Button/Button'
import { Fox, Globe } from '../libs/icons'

export default {
  title: 'tr3butor/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  alignRight: true,
  label: 'connect wallet',
  simplify: false
}

Primary.argTypes = {
  primary: { control: { disable: true } },
  icon: { control: { disable: true } },
  simplify: { control: { disable: true } },
  onlyIcon: { control: { disable: true } }
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  primary: true,
  alignRight: true,
  label: 'connect wallet',
  simplify: false,
  icon: <Fox />
}

WithIcon.argTypes = {
  primary: { control: { disable: true } },
  icon: { control: { disable: true } },
  alignRight: { control: { disable: true } },
  onlyIcon: { control: { disable: true } }
}

export const OnlyIcon = Template.bind({})
OnlyIcon.args = {
  primary: false,
  alignRight: false,
  simplify: true,
  icon: <Globe />,
  onlyIcon: true
}

OnlyIcon.argTypes = {
  primary: { control: { disable: true } },
  icon: { control: { disable: true } },
  alignRight: { control: { disable: true } },
  simplify: { control: { disable: true } },
  onlyIcon: { control: { disable: true } },
  width: { control: { disable: true } }
}

export const Simplify = Template.bind({})
Simplify.args = {
  primary: true,
  alignRight: true,
  label: 'apply as a dao',
  simplify: true
}

Simplify.argTypes = {
  primary: { control: { disable: true } },
  icon: { control: { disable: true } },
  simplify: { control: { disable: true } },
  onlyIcon: { control: { disable: true } }
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'mission',
  simplify: false
}

Secondary.argTypes = {
  icon: { control: { disable: true } },
  simplify: { control: { disable: true } },
  primary: { control: { disable: true } },
  alignRight: { control: { disable: true } },
  onlyIcon: { control: { disable: true } }
}
