import React from 'react'
import { screen, fireEvent } from '@testing-library/react'

import Header from './index'
import { HeaderProps } from './Header.props'
import { HeaderMock } from './Header.mocks'

const mountComponent = (props: HeaderProps, route?: string) => renderWithRouter(<Header {...props} />, route)

describe('<Header />', () => {
  it('should render name properly', () => {
    const makeItem = HeaderMock()
    mountComponent(makeItem)

    expect(screen.getByText(`Olá, ${makeItem.name}`)).toBeInTheDocument()
  })

  it('should redirect to settings when clicked on link', () => {
    const { history } = mountComponent(HeaderMock())

    fireEvent.click(screen.getByRole('link'))

    expect(history.location.pathname).toBe('/settings')
  })
})