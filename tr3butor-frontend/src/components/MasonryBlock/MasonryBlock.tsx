import React from 'react'
import Masonry from 'react-masonry-css'
import { ScMasonryBlock } from './styled'


export const MasonryBlock: React.FC<{breakpoint: Record<string, number>}> = ({ children,breakpoint }) => {
  return (
    <ScMasonryBlock>
    <Masonry
      breakpointCols={breakpoint}
      className="masonry-grid"
      columnClassName="masonry-grid_column">
      {children}
    </Masonry>
    </ScMasonryBlock>)
}
