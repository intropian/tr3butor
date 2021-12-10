import React from 'react'
import { ScFooter } from './styled'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'

interface ConnectTabProps {}

export const Footer: React.FC<ConnectTabProps> = ({ ...props }) => {
  return (
    <ScFooter>
      <Logo animated={true} />
      <div>
        <Button label={'terms of service'} />
        <Button label={'privacy policy'} />
      </div>
    </ScFooter>
  )
}
