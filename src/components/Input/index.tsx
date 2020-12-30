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
}

const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, placeholder = " ", className, ...props }) => {
  return (
    <InputWrapper className={className}>
      <SInput id={label} placeholder={placeholder} {...props}/>
      <Label htmlFor={label}>{label}</Label>
    </InputWrapper>
  )
}


export default Input