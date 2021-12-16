import React, { FC } from 'react'
import { ScButton } from './styled'
import { Link } from 'react-router-dom'

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
  icon?: React.ReactElement;
  onlyIcon?: boolean;
  buttonType?: 'simple' | 'href' | 'link';
  url?:string;
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
  buttonType = 'simple',
  url = '',
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
      <TypeWrapper buttonType={buttonType} url={url}>
        {icon}
        {!onlyIcon && label}
      </TypeWrapper>
    </ScButton>
  )
}


const TypeWrapper: FC<{ buttonType: string; url: string; }> = ({buttonType,url, children}) => {
  switch (buttonType){
    case 'href':
      return <>{children}<a target="_blank" href={url} rel="noreferrer" /></>
    case 'link':
      return <>{children}<Link to={url} /></>
    default:
      return <>{children}</>
  }
}
