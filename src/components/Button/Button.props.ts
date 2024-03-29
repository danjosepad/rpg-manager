import { ButtonHTMLAttributes } from 'react'

export type InputComponentProps = {
  text: string,
  className?: string,
  background?: string
  loading?: boolean
  onClick?: () => any
}

export type ButtonProps = InputComponentProps & ButtonHTMLAttributes<HTMLButtonElement>