import React from 'react'
import { ScInfoBlock } from './styled'

interface InfoBlockProps {
  title: string;
  content: string;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  content,
  ...props
}) => {
  if (title && content) {
    return (
      <ScInfoBlock>
        <h4>{title}</h4>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </ScInfoBlock>
    )
  } else {
    return null
  }
}
