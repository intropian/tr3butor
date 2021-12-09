import React from 'react'
import { ScPreloader } from './styled'

interface PreloaderProps {
  height?: string;
  width?: string;
}

export const Preloader: React.FC<PreloaderProps> = ({
  height = '100%',
  width = '100%'
}) => {
  return (
    <ScPreloader
      style={{
        height,
        width
      }}
    >
      <img src="/images/loading.gif" alt="loading" />
    </ScPreloader>
  )
}
