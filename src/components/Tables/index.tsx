import React from 'react';

// Project imports

import TableCard from './components/TableCard'

// Styled components

import { Container } from './styles';

interface TableCardProps {
  data: any
}

const Tables: React.FC<TableCardProps> = ({ data }) => {
  return (
    <Container>
      {data.map((item: any) => (
        <TableCard tableData={item}/>
      ))}
    </Container>
  )
}

export default Tables