import React from 'react'
import { ScTabHead } from './styled'
import { Button } from '../Button/Button'

interface TabHeadProps {
  title: string;
  label: string;
  url: string;
}

export const TabHead: React.FC<TabHeadProps> = ({
  title,
  label,
  url, 
  ...props
}) => {
  return (
    <ScTabHead className="flex">
      <span>{title}</span>
      <Button buttonType={'link'} label={label} alignRight primary width={280} url={url} />
    </ScTabHead>
  )
}
