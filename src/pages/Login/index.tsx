import React from 'react'

// Styled components

import {
  Container,
  LoginWrapper,
  Title,
} from './styles'

// Project imports

import Button from 'components/Button'
import Input from 'components/Input'

const Home = () => {
  return (
    <Container>
      <Title>RPG Manager</Title>
      <LoginWrapper>
        <Input label="Login" />
        <Input label="Senha" />
        <Button text="Acessar" loading={true}/>
      </LoginWrapper>
    </Container>
  )
}

export default Home