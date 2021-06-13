import React from 'react'
import { screen, render } from '@testing-library/react'

import Tables from './Tables'
import { TablesMock } from './Tables.mocks'
import { TablesProps } from './Tables.props'

const mountComponent = (props: TablesProps) => render(<Tables {...props} />)

const ELEMENTS = {
  CONTAINER: 'table-card__container'
}

describe('<Tables />', () => {
  it('should render data properly', () => {
    mountComponent(TablesMock())

    expect(screen.getAllByTestId(ELEMENTS.CONTAINER)).toHaveLength(3)
  })
})