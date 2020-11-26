import React from 'react';

// Project imports

import {
  Container,
  LoginWrapper,
  Title,
  Description
} from './styles';


const Home: React.FC = () => {
  return (
    <Container>
      <Title>RPG Manager</Title>
      <LoginWrapper>
        <Description>
          Acesse e começe já sua experiência
        </Description>
      </LoginWrapper>
    </Container>
  )
}

export default Home;