import React from 'react'
import { screen, render } from '@testing-library/react'

import Input from './index'
import { InputProps } from './Input.props'
import { InputMock } from './Input.mocks'

const mountComponent = (props: InputProps) => render(<Input {...props} />)

describe('<Input />', () => {
  it('should show label and placeholder properly', async () => {
    const makeItem = InputMock()
    mountComponent(makeItem)

    expect(screen.getByText(makeItem.label)).toBeInTheDocument()
    expect(screen.getByText(makeItem.label)).toHaveProperty('htmlFor', makeItem.label)

    expect(screen.getByRole('textbox', {
      name: makeItem.label
    })).toHaveProperty('placeholder', makeItem.placeholder)
    expect(screen.getByRole('textbox', {
      name: makeItem.label
    })).toHaveProperty('id', makeItem.label)
  })
  
  it('should accept input properties on component', async () => {
    const makeItem = InputMock({
      type: 'text',
      maxLength: 10,
    })
    mountComponent(makeItem)

    expect(screen.getByLabelText(makeItem.label)).toHaveProperty('type', 'text')
    expect(screen.getByLabelText(makeItem.label)).toHaveProperty('maxLength', 10)
  })
})