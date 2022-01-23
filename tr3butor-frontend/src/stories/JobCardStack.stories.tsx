import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { JobCardStack } from '../components/JobCardStack/JobCardStack'

export default {
  title: 'tr3butor/JobCardStack',
  component: JobCardStack
} as ComponentMeta<typeof JobCardStack>

const Template: ComponentStory<typeof JobCardStack> = (args) => (
  <JobCardStack {...args} />
)

export const Default = Template.bind({})

Default.args = {
  data: [{
    title: 'Mint a minimum of 100 mUSD by converting stablecoins',
    description: 'An open source portfolio tracker and analytics tool.',
    salary_range: 'string',
    how_to_apply: 'string',
    link_apply: 'string',
    text_blocks: [],
    location: 'string',
    timezone: 'string',
    payment: 'string',
    time_length: 'string',
    dao: {
      name: 'Orakuru',
      avatar: 'https://tr3butor.selin.in.ua/logos/dxdao.png',
      id: 'string',
      link_website: '',
      link_discord: '',
      description: ''

    },
    id: 'string',
    created_at: 'string'
  }, {
    title: 'Mint a minimum of 100 mUSD by converting stablecoins',
    description: 'An open source portfolio tracker and analytics tool.',
    salary_range: 'string',
    how_to_apply: 'string',
    link_apply: 'string',
    text_blocks: [],
    location: 'string',
    timezone: 'string',
    payment: 'string',
    time_length: 'string',
    dao: {
      name: 'Orakuru',
      avatar: 'https://tr3butor.selin.in.ua/logos/dxdao.png',
      id: 'string',
      link_website: '',
      link_discord: '',
      description: ''

    },
    id: 'string',
    created_at: 'string'
  },
    {
      title: 'Mint a minimum of 100 mUSD by converting stablecoins',
      description: 'An open source portfolio tracker and analytics tool.',
      salary_range: 'string',
      how_to_apply: 'string',
      link_apply: 'string',
      text_blocks: [],
      location: 'string',
      timezone: 'string',
      payment: 'string',
      time_length: 'string',
      dao: {
        name: 'Orakuru',
        avatar: 'https://tr3butor.selin.in.ua/logos/dxdao.png',
        id: 'string',
        link_website: '',
        link_discord: '',
        description: ''

      },
      id: 'string',
      created_at: 'string'
    },
    {
      title: 'Mint a minimum of 100 mUSD by converting stablecoins',
      description: 'An open source portfolio tracker and analytics tool.',
      salary_range: 'string',
      how_to_apply: 'string',
      link_apply: 'string',
      text_blocks: [],
      location: 'string',
      timezone: 'string',
      payment: 'string',
      time_length: 'string',
      dao: {
        name: 'Orakuru',
        avatar: 'https://tr3butor.selin.in.ua/logos/dxdao.png',
        id: 'string',
        link_website: '',
        link_discord: '',
        description: ''

      },
      id: 'string',
      created_at: 'string'
    }]
}
