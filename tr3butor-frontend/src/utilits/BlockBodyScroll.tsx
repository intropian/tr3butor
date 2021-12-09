import React, { FC } from 'react'

import { useBodyScrollLock } from 'hooks/useBodyScrollLock'

export interface BodyScrollLockProps {
  on?: boolean;
}

export const BodyScrollLock: FC<BodyScrollLockProps> = ({
  children,
  on = true
}) => {
  useBodyScrollLock(on)

  return <>{children}</>
}
