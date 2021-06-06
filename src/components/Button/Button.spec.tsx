import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from './index'
import { ButtonProps } from './Button.props'
import { ButtonMock } from './Button.mocks'

const mountComponent = (props: ButtonProps) => render(<Button {...props} />)

const ELEMENTS = {
  LOADING: 'button__loading'
}

describe('<Button />', () => {
  it('should render text properly', () => {
    const makeItem = ButtonMock()
    mountComponent(makeItem)

    expect(screen.getByText(makeItem.text)).toBeInTheDocument()
  })

  it('should be loading when prop is passed', () => {
    mountComponent(ButtonMock({
      loading: true
    }))

    expect(screen.getByTestId(ELEMENTS.LOADING)).toBeInTheDocument()
  })

  it('should receive background style', () => {
    const makeItem = ButtonMock({
      background: 'purple'
    })
    mountComponent(makeItem)

    expect(screen.getByText(makeItem.text)).toHaveStyle({
      background: 'purple'
    })
  })
  
  it('should receive html button attributes properly', () => {
    const makeItem = ButtonMock({
      type: "submit",
      disabled: true
    })
    mountComponent(makeItem)

    expect(screen.getByText(makeItem.text)).toHaveProperty('disabled', true)
    expect(screen.getByText(makeItem.text)).toHaveProperty('type', 'submit')
  })
})