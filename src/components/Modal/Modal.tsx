import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

// Project imports

import { colors } from 'styles/theme'
import { ModalProps } from './Modal.props'

// Styled components

import { Wrapper, Container, Content, Title, ExitButton } from './Modal.style'

const Modal = ({
  isShowing,
  children,
  title,
  onClose = () => {}
}: ModalProps) => {

    return isShowing ? (
      <Wrapper data-testid="modal__wrapper">
        <Container>
          <ExitButton onClick={onClose} data-testid="modal__exit-button">
            <AiOutlineClose size={30} color={colors.grayLighter} />
          </ExitButton>
          {title && (
            <Title data-testid="modal__title">{title}</Title>
          )}
          <Content>
            {children}
          </Content>
        </Container>
      </Wrapper>
    ) : null
}

export default Modal