import React from 'react'
import { ScButton } from './styled'

interface ButtonProps {
  primary?: boolean;
  alignRight?: boolean;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  simplify?: boolean;
  label?: string;
  onClick?: () => void;
  width?: number;
  icon?: any;
  onlyIcon?: boolean;
}

export const Button = ({
  primary = false,
  alignRight,
  backgroundColor,
  label,
  color,
  simplify,
  borderColor,
  width,
  icon,
  onlyIcon,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'tr3butor-button--primary'
    : 'tr3butor-button--secondary'
  return (
    <ScButton
      type="button"
      className={[
        'tr3butor-button',
        alignRight && !onlyIcon ? 'tr3butor-button--right' : '',
        onlyIcon ? 'tr3butor-button--only-icon' : '',
        simplify ? 'tr3butor-button--simplify' : '',
        mode
      ].join(' ')}
      style={{
        backgroundColor,
        color,
        borderColor,
        width
      }}
      {...props}
    >
      {icon}
      {!onlyIcon && label}
    </ScButton>
  )
}
