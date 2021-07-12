
import React from 'react'

// Project imports

import { HomePageProps } from './Home.props'
import Tables from 'components/Tables'

// Styled components

import { Container,Title, Form, SButton, SInput } from './styles'
import faker from 'faker'

const HomePage = ({}: HomePageProps) => {
  const mockTableData = [{
    tableData: {
      img: faker.internet.avatar(),
      name: faker.lorem.word(),
      playersQuantity: Number(faker.finance.amount(1, 20))
    }
  }]
  
  return (
    <Container>
      <Title>Suas mesas</Title>
      <Form>
        <SInput label="Buscar" />
        <SButton text="Acessar" />
      </Form>
      <Tables data={mockTableData}/>
    </Container>
  )
}

export default HomePage