import React from 'react'

// Styled components

import {
 InputWrapper,
 SInput,
 Label
} from './styles'


interface InputProps {
  className?: string,
  label: string,
  placeholder?: string,
  inputProps?: any
}

const Input: React.FC<InputProps> = ({ label, placeholder = " ", inputProps, className }) => {

  return (
    <InputWrapper className={className}>
      <SInput id={label} placeholder={placeholder} {...inputProps}/>
      <Label htmlFor={label}>{label}</Label>
    </InputWrapper>
  )
}


export default Input