
import React from 'react'

// Project imports

import { HomePageProps } from './Home.props'
import Tables from 'components/Tables'

// Styled components

import { Container,Title, Form, SButton, SInput } from './styles'

const HomePage = ({}: HomePageProps) => {
  return (
    <Container>
      <Title>Suas mesas</Title>
      <Form>
        <SInput label="Buscar" />
        <SButton text="Acessar" />
      </Form>
      <Tables data={[1,2,3,4,5]}/>
    </Container>
  )
}

export default HomePage