import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'

import ChangePassword from './ChangePassword'

const mountComponent = () => render(<ChangePassword />)

const ELEMENTS = {
  CONTAINER: 'form__container'
}

describe('<ChangePassword />', () => {
  it('should render properly', () => {
    mountComponent()

    expect(screen.getByTestId(ELEMENTS.CONTAINER)).toHaveFormValues({
      password: '',
      confirmPassword: ''
    })
  })
})

