import React from 'react'
import { ScConnectTab } from './styled'
import { Button } from '../Button/Button'
import { redirectTo } from '../../utilits/common'

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
          onClick={() => redirectTo('https://discord.gg/Mvrw455uyM')}
        />
        <Button
          label={'twitter'}
          primary={true}
          alignRight={true}
          width={280}
          onClick={() => redirectTo('https://twitter.com/tr3butor')}
        />
        <Button
          label={'mirror'}
          primary={true}
          alignRight={true}
          width={280}
          onClick={() =>
            redirectTo(
              'https://mirror.xyz/0x969AEb1A3CFcD44c8F509E87B845AEE66Ad15a83/NKTBPlk_3nbAWzAVzMEuZPUu64wPlrSD5DTpbl53sIg'
            )
          }
        />
      </div>
    </ScConnectTab>
  )
}
