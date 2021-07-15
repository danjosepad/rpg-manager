import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'

import Form from './Form'

const mockOnSubmitt = jest.fn()

const mountComponent = () => render(<Form onSubmit={mockOnSubmitt} />)

const ELEMENTS = {
  CONTAINER: 'form__container'
}

describe('<Form />', () => {
  it('should render initialValues property', () => {
    mountComponent()

    expect(screen.getByTestId(ELEMENTS.CONTAINER)).toHaveFormValues({
      password: '',
      confirmPassword: ''
    })
  })
  it('should fill fields and submit properly', async () => {
    mountComponent()
  
    fireEvent.change(screen.getByLabelText('Senha'), { target: { value: 'Test' }})
    fireEvent.change(screen.getByRole('textbox', {
      name: /confirm-password/i
    }), { target: { value: 'Testing' }})

    expect(screen.getByTestId(ELEMENTS.CONTAINER)).toHaveFormValues({
      password: 'Test',
      confirmPassword: 'Testing'
    })
  })
})