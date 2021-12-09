import React from 'react'
import { ScTicket } from './styled'
import { DecorBlocks } from '../DecorBlocks/DecorBlocks'
import { Button } from '../Button/Button'

interface ConnectTabProps {}

export const Ticket: React.FC<ConnectTabProps> = ({ ...props }) => {
  const redirect = (to: string) => window.location.replace(to)
  return (
    <ScTicket>
      <div className="border" />
      <div className="background" />
      <DecorBlocks scenario="first" color="rgba(255, 255, 255, 0.2)" />
      <div className="ticket-content">
        <h6>
          let’s create new world together
          <br />
          new way with big hearts
        </h6>
        <div>
          <Button
            label="apply as a contributor"
            primary={true}
            simplify={true}
            onClick={() => redirect('https://tr3butor.com/tr3butor.html')}
          />
          <Button
            label="apply as a dao"
            primary={true}
            alignRight={true}
            simplify={true}
            onClick={() => redirect('https://tr3butor.com/dao.html')}
          />
        </div>
      </div>
    </ScTicket>
  )
}
