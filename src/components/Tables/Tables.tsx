import React from 'react'

// Project imports

import TableCard from './components/TableCard'
import { Container } from './Tables.style'
import { TableCardProps } from './Tables.types'

const Tables = ({ data }: TableCardProps) => {
  return (
    <Container>
      {data.map((item: any) => (
        <TableCard tableData={item}/>
      ))}
    </Container>
  )
}

export default Tables