import { FC, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

export const Portal: FC<{ node?: Element }> = ({ node, children }) => {
  const defaultNode = useRef<HTMLDivElement>()

  if (!node && !defaultNode.current) {
    defaultNode.current = document.createElement('div')
    document.body.appendChild(defaultNode.current)
  }

  useEffect(
    () => () => {
      if (defaultNode && defaultNode.current) {
        document.body.removeChild(defaultNode.current)
      }

      defaultNode.current = undefined
    },
    []
  )

  return ReactDOM.createPortal(
    children,
    node || (defaultNode.current as HTMLDivElement)
  )
}
