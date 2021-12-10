import React from 'react'
import { ScMenu } from './styled'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

export const Menu = () => {
  const location = useLocation()
  const menuData = [
    {
      name: 'dao’s',
      url: '/'
    },
    {
      name: 'quests',
      url: '/quests'
    },
    {
      name: 'contributors',
      url: '/',
      soon: true
    },
    {
      name: 'learn',
      url: '/',
      soon: true
    }
  ]

  const menuActive = (url: string, soon?: boolean) =>
    location.pathname === url && !soon
  return (
    <ScMenu>
      {menuData.map(({ name, url, soon }, key) => {
        return (
          <li key={key} className={soon ? 'extra-margin' : ''}>
            <Link
              className={[
                soon || location.pathname === url ? 'disabled-link' : '',
                menuActive(url, soon) ? 'active' : ''
              ].join(' ')}
              to={url}
            >
              {name}
            </Link>
            {soon && <span>soon</span>}
          </li>
        )
      })}
    </ScMenu>
  )
}
