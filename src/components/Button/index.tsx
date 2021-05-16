import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai';

// Project imports

import { InputProps } from './Button.types'
import { Button } from './Button.style'

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