import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'

import Modal from './index'
import { ModalProps } from './Modal.props'
import { ModalMock } from './Modal.mocks'

const mountComponent = (props: ModalProps) => render(<Modal {...props as ModalProps} />)

const ELEMENTS = {
  EXIT_BUTTON: 'modal__exit-button',
  WRAPPER: 'modal__wrapper',
  TITLE: 'modal__title'
}

const spyOnClose = jest.fn()

describe('<Modal />', () => {
  it('should render title and children properly', () => {
    const makeItem = ModalMock()
    mountComponent(makeItem)

    expect(screen.getByText(makeItem.title)).toBeInTheDocument()
    expect(screen.getByText(/Test/i)).toBeInTheDocument()
  })

  it('should not render title div if title is null', () => {
    mountComponent(ModalMock({
      title: null
    }))

    expect(screen.queryByTestId(ELEMENTS.TITLE)).not.toBeInTheDocument()
  })

  it('should not show container if isShowing prop is false', () => {
    mountComponent(ModalMock({
      isShowing: false
    }))

    
    expect(screen.queryByTestId(ELEMENTS.WRAPPER)).not.toBeInTheDocument()
  })

  it('should call onClose function when modal is closed', () => {
    mountComponent(ModalMock({
      onClose: spyOnClose
    }))

    fireEvent.click(screen.getByTestId(ELEMENTS.EXIT_BUTTON))

    expect(spyOnClose).toBeCalled()
  })

  
})