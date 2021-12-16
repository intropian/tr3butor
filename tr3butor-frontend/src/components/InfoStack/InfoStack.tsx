import React from 'react'
import { ScInfoStack } from './styled'
import { InfoBlock } from '../InfoBlock/InfoBlock'
import { BlockInfo } from 'utilits/transformDataToBlockInfo'

interface InfoStackProps {
  blocks: BlockInfo[] | null
}

export const InfoStack: React.FC<InfoStackProps> = ({ blocks, ...props }) => {
  return (
    <ScInfoStack>
      {blocks && blocks.map((block, key) => <InfoBlock content={block.content} title={block.title} key={key} />)}
    </ScInfoStack>
  )
}
