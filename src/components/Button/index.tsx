import React, { ButtonHTMLAttributes } from 'react'
import { AiOutlineLoading } from 'react-icons/ai';

// Styled components

import { Button } from './styles'
interface InputProps {
  text: string,
  className?: string,
  background?: string
  loading?: boolean
  onClick?: () => any
}


const Input: React.FC<
InputProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, onClick, background, loading = false, className, ...props }) => {

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