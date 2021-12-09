import React from 'react'
import { ScConnectTab } from './styled'
import { Button } from '../Button/Button'

interface ConnectTabProps {}

export const ConnectTab: React.FC<ConnectTabProps> = ({ ...props }) => {
  return (
    <ScConnectTab>
      <p>
        connect with us
        <br /> updates and news
      </p>
      <div>
        <Button
          label={'discord'}
          primary={true}
          alignRight={true}
          width={280}
        />
        <Button
          label={'twitter'}
          primary={true}
          alignRight={true}
          width={280}
        />
        <Button label={'mirror'} primary={true} alignRight={true} width={280} />
      </div>
    </ScConnectTab>
  )
}
