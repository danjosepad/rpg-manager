import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai';

// Project imports

import { InputProps } from './Button.props'

// Styled components

import { Button } from './styles'

const Input = ({ 
  text, 
  onClick, 
  background, 
  loading = false, 
  className, 
  ...props 
}: InputProps) => {

  return (
    <Button
      background={background}
      onClick={onClick}
      loading={loading}
      className={className}
      {...props}
      >
      {loading ? <AiOutlineLoading size={20} /> : text}
      </Button>
  )
}


export default Input