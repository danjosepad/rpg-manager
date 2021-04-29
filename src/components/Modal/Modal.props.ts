import { ReactNode } from 'react'
 
export type ModalProps = {
  isShowing: boolean
  onClose?: () => any
  children: ReactNode
  title?: string
}