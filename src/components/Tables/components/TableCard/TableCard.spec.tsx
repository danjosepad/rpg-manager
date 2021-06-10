import React from 'react'
import { screen, render } from '@testing-library/react'

import TableCard from './TableCard'
import { TableCardProps } from './TableCard.props'
import { TableCardMock } from './TableCard.mocks'
import { colors } from 'styles/theme'

const mountComponent = (props: TableCardProps) => render(<TableCard {...props} />)

const ELEMENTS = {
  CONTAINER: 'table-card__container'
}

describe('<TableCard />', () => {
  it('should render data properly', () => {
    const makeItem = TableCardMock()
    mountComponent(makeItem)

    expect(screen.getByTestId(ELEMENTS.CONTAINER)).toHaveStyle({
      backgroundImage: `${colors.grayDark} url(${makeItem.tableData.img}) no-repeat center;`
    })
    expect(screen.getByText(makeItem.tableData.name)).toBeInTheDocument()
    expect(screen.getByText(`N de participantes: ${makeItem.tableData.playersQuantity}`)).toBeInTheDocument()
  })
})