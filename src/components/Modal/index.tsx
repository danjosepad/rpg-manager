import React, { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai'

// Project imports

import { colors } from 'styles/theme'
import { ModalProps } from './Modal.props'

// Styled components

import { Wrapper, Container, Content, Title, ExitButton } from './styles'

const Modal = ({
  isShowing,
  children,
  title = '',
  onClose = () => {}
}: ModalProps) => {

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