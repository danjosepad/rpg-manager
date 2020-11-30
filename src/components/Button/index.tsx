import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai';

// Styled components

import { Button } from './styles'
interface InputProps {
  text: string,
  background?: string
  loading?: boolean
  onClick?: () => any
}


const Input: React.FC<InputProps> = ({ text, onClick, background, loading = false }) => {

  return (
    <Button background={background} onClick={onClick} loading={loading}>
      {loading ? <AiOutlineLoading size={20} /> : text}
      </Button>
  )
}


export default Input