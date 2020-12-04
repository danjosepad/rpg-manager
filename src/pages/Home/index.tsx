
import React from 'react'
import styled from 'styled-components';

// Project imports


import Input from 'components/Input'
import { colors } from 'styles/theme';
import Tables from 'components/Tables'

// Styled components

import { Container,Title, Form, SButton } from './styles'

interface HomePageProps {}

const SInput = styled(Input)`
  background: ${colors.grayDark};
`;

const HomePage: React.FC<HomePageProps> = () => {
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