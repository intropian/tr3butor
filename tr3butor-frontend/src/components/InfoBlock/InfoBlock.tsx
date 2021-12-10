import React from 'react'
import { ScInfoBlock } from './styled'

interface InfoBlockProps {
  title: string;
  content: string[];
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  content,
  ...props
}) => {
  return (
    <ScInfoBlock>
      <h4>{title}</h4>
      {content.map((data, key) => (
        <p key={key}>{data}</p>
      ))}
    </ScInfoBlock>
  )
}
