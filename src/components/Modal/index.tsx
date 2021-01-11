import React, { useState, ReactNode } from 'react';

// Project imports

// Styled components

import { Wrapper, Container, Content, Title, ExitButton } from './styles'

interface ModalProps {
  isShowing: boolean
  onExit?: () => any
  children: ReactNode
  title?: string
}

const Modal: React.FC<ModalProps> = ({
  isShowing,
  children,
  title = '',
  onExit = () => {}
}) => {
  const [showing, setShowing] = useState<boolean>(isShowing)

  const closeModal = () => {
    setShowing(false)
    onExit()
  }

  return (
    <Wrapper isShowing={showing}>
      <Container>
        <ExitButton onClick={closeModal}>Teste</ExitButton>
        {title && (
          <Title>Texto</Title>
        )}
        <Content>
          {children}
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Modal