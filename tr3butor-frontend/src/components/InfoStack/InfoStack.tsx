import React from 'react'
import { ScInfoStack } from './styled'
import { InfoBlock } from '../InfoBlock/InfoBlock'

interface InfoStackProps {
  blocks: Record<string, string>[]
}

export const InfoStack: React.FC<InfoStackProps> = ({ blocks = [] }) => {
  return (
    <ScInfoStack>
      {blocks.map((block, key) =>
        <InfoBlock
          content={block.content}
          title={block.title}
          key={key}
        />
      )}
    </ScInfoStack>
  )
}
