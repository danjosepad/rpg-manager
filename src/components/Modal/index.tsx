import React, { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai'

// Project imports

import { colors } from 'styles/theme'

// Styled components

import { Wrapper, Container, Content, Title, ExitButton } from './styles'

interface ModalProps {
  isShowing: boolean
  onClose?: () => any
  children: ReactNode
  title?: string
}

const Modal: React.FC<ModalProps> = ({
  isShowing,
  children,
  title = '',
  onClose = () => {}
}) => {

  return (
    <Wrapper isShowing={isShowing}>
      <Container>
        <ExitButton onClick={onClose}>
          <AiOutlineClose size={30} color={colors.grayLighter} />
        </ExitButton>
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