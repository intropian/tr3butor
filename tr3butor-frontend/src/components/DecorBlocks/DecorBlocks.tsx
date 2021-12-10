import React from 'react'
import { ScDecorBlocks } from './styled'

interface DecorBlocksProps {
  scenario?: 'first' | 'second' | 'third';
  color?: string;
  zIndex?:number
}

export const DecorBlocks: React.FC<DecorBlocksProps> = ({
  scenario = 'first', zIndex = -1,
  color = 'rgba(9, 19, 14, 0.3)'
}) => {
  return (
    <ScDecorBlocks zIndex={zIndex} color={color} className={[scenario].join(' ')}>
      <b />
      <b />
      <b />
    </ScDecorBlocks>
  )
}
