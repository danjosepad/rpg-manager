import { InputHTMLAttributes } from 'react'

export type InputComponentProps = {
  className?: string,
  label: string,
  placeholder?: string,
}


export type InputProps = InputComponentProps & InputHTMLAttributes<HTMLInputElement>