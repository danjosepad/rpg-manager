import React from 'react'

// Project imports

import TableCard from './components/TableCard'
import { Container } from './Tables.style'
import { TablesProps } from './Tables.props'
import { TableCardProps } from './components/TableCard/TableCard.props'

const Tables = ({ data }: TablesProps) => {
  return (
    <Container>
      {data.map((item: TableCardProps, idx) => (
        <TableCard key={idx + item.tableData.name} tableData={item.tableData}/>
      ))}
    </Container>
  )
}

export default Tables