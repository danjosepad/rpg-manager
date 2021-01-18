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

  return (
    <Wrapper isShowing={isShowing}>
      <Container>
        <ExitButton onClick={onExit}>Teste</ExitButton>
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