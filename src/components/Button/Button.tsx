import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai';

// Project imports

import { ButtonProps } from './Button.props'
import { SButton } from './Button.style'

const Button = ({ 
  text, 
  onClick, 
  background, 
  loading = false, 
  className, 
  ...props 
}: ButtonProps) => {

  return (
    <SButton
      background={background}
      onClick={onClick}
      className={className}
      {...props}
      >
      {loading ? <AiOutlineLoading data-testid="button__loading" size={20} /> : text}
      </SButton>
  )
}


export default Button