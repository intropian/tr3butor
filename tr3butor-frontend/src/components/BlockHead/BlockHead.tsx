import React from 'react'
import { ScBlockHead } from './styled'

interface TabHeadProps {
  title: string;
  text: string;
}

export const BlockHead: React.FC<TabHeadProps> = ({
  title,
  text,
  ...props
}) => {
  return (
    <ScBlockHead>
      <h2>{title}</h2>
      <h6>{text}</h6>
    </ScBlockHead>
  )
}
