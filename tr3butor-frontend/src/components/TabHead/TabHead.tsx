import React from 'react'
import { ScTabHead } from './styled'
import { Button } from '../Button/Button'

interface TabHeadProps {
  title: string;
  label: string;
  onClick: () => void;
}

export const TabHead: React.FC<TabHeadProps> = ({
  title,
  label,
  onClick,
  ...props
}) => {
  return (
    <ScTabHead className="flex">
      <span>{title}</span>
      <Button label={label} alignRight primary width={280} onClick={onClick} />
    </ScTabHead>
  )
}
