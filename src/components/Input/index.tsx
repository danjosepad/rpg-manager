import React from 'react'

// Project imports

import { InputProps } from './Input.props'

// Styled components

import {
 InputWrapper,
 SInput,
 Label
} from './styles'

const Input = ({ label, placeholder = " ", className, ...props }: InputProps) => {
  return (
    <InputWrapper className={className}>
      <SInput id={label} placeholder={placeholder} {...props}/>
      <Label htmlFor={label}>{label}</Label>
    </InputWrapper>
  )
}


export default Input