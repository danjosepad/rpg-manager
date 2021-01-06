import React, { ReactNode } from 'react';

// Project imports

// Styled components

import { Wrapper, Container, Content, Title } from './styles'

interface ModalProps {
  isShowing: boolean
  children: ReactNode
  title?: string
}

const Modal: React.FC<ModalProps> = ({ isShowing, children, title = '' }) => {
  return (
    <Wrapper isShowing={isShowing}>
      <Container>
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