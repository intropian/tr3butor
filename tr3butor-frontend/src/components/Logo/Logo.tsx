import React, { useEffect, useState } from 'react'
import { Key3, Logo as LogoIcon } from '../../libs/icons'
import { ScLogo } from './styled'
import { colors } from '../../utilits/Colors'
import { Link } from 'react-router-dom'

interface LogoProps {
  animated?: boolean;
  msInterval?: number;
}

export const Logo = ({ animated, msInterval = 1000, ...props }: LogoProps) => {
  const [animatedColor, setAnimatedColor] = useState<string>(colors.orange)
  const getColor = (color: string) =>
    color === colors.orange
      ? colors.green
      : color === colors.green
        ? colors.mint
        : colors.orange

  useEffect(() => {
    const timer = setTimeout(
      () => animated && setAnimatedColor(getColor(animatedColor)),
      msInterval
    )
    return () => clearTimeout(timer)
  }, [animatedColor])
  return (
    <ScLogo>
      <Link to="/">
        <LogoIcon />
        <Key3 color3={animatedColor} />
      </Link>
    </ScLogo>
  )
}
