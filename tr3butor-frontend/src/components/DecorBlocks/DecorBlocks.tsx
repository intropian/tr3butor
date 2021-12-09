import React from 'react'
import { ScDecorBlocks } from './styled'

interface DecorBlocksProps {
  scenario?: 'first' | 'second' | 'third';
  color?: string;
}

export const DecorBlocks: React.FC<DecorBlocksProps> = ({
  scenario = 'first',
  color = 'rgba(9, 19, 14, 0.3)'
}) => {
  return (
    <ScDecorBlocks color={color} className={[scenario].join(' ')}>
      <b />
      <b />
      <b />
    </ScDecorBlocks>
  )
}
