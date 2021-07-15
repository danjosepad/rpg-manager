
import React from 'react'

// Project imports

import { HomePageProps } from './Home.props'
import Tables from 'components/Tables'

// Styled components

import { Container,Title, Form, SButton, SInput } from './styles'
import faker from 'faker'

const HomePage = (props: HomePageProps) => {
  const mockTableData = [{
    tableData: {
      img: faker.internet.avatar(),
      name: faker.lorem.word(),
      playersQuantity: Number(faker.finance.amount(1, 20))
    }
  },
  {
    tableData: {
      img: faker.internet.avatar(),
      name: faker.lorem.word(),
      playersQuantity: Number(faker.finance.amount(1, 20))
    }
  },
  {
    tableData: {
      img: "https://th.bing.com/th/id/R.cb86232a673583e47d55952f67333f11?rik=DMXGoWZGVwBz6Q&pid=ImgRaw",
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