import React from 'react';

// Project imports

import { Span as Description, H3 as Title, H4 as Info} from 'styles/fonts'
import { colors } from 'styles/theme'
import { Container } from './TableCard.style'
import { TableCardProps } from './TableCard.props'

const TableCard = ({ tableData }: TableCardProps) => {
  return (
    <Container img={tableData.img} data-testid="table-card__container">
      <Title color={colors.orange}>{tableData.name}</Title>
      <Info>N de participantes: {tableData.playersQuantity}</Info>
      <Description color={colors.grayLight}>
        Descrição da mesa
      </Description>
    </Container>
  )
}

export default TableCard