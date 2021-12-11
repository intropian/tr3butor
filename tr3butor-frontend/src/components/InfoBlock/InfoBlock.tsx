import React from 'react'
import { ScInfoBlock } from './styled'

interface InfoBlockProps {
  title?: string;
  content?: string|string[];
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
        {Array.isArray(content)
          ? <ul>{content.map((data, key) => (
            <li key={key}>{data}</li>
          ))}</ul>
          : <p>{content}</p>}
      </ScInfoBlock>
    )
  } else {
    return null
  }
}
