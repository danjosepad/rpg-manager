import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai';

// Project imports

import { ButtonProps } from './Button.props'
import { Button } from './Button.style'

const Input = ({ 
  text, 
  onClick, 
  background, 
  loading = false, 
  className, 
  ...props 
}: ButtonProps) => {

  return (
    <Button
      background={background}
      onClick={onClick}
      className={className}
      {...props}
      >
      {loading ? <AiOutlineLoading data-testid="button__loading" size={20} /> : text}
      </Button>
  )
}


export default Input