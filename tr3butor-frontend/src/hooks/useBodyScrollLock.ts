import { useEffect } from 'react'

export function useBodyScrollLock (on: boolean) {
  useEffect(() => {
    if (on) {
      document.body.classList.add('no-scroll')
      document.documentElement.classList.add('no-scroll')
      return () => {
        document.body.classList.remove('no-scroll')
        document.documentElement.classList.remove('no-scroll')
      }
    }
  }, [on])
}
