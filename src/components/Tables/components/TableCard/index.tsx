import React from 'react';

// Project imports

import { Span as Description, H3 as Title, H4 as Info} from 'styles/fonts'
import { colors } from 'styles/theme'
// Styled components

import { Container } from './styles';

interface TableCardProps {
  tableData: any
}

const TableCard: React.FC<TableCardProps> = ({ tableData }) => {
  return (
    <Container img={tableData.img}>
      <Title color={colors.orange}>{tableData.name}</Title>
      <Info>N de participantes: {tableData.playersQuantity}</Info>
      <Description color={colors.grayLight}>
        Descrição da mesa
      </Description>

    </Container>
  )
}

export default TableCard