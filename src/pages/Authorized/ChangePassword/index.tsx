
import React from 'react'

// Project imports

import { H3 as Name, H2 } from 'styles/fonts'
import Input from 'components/Input'
import Button from 'components/Button'

// Styled components

import { Container } from './styles'

interface ChangePasswordProps {

}

const ChangePassword: React.FC<ChangePasswordProps> = () => {
  return (
    <Container>
      <Input label="Sua senha" type="password" />
      <Input label="Confirme sua senha" type="password" />
      <Button text="alterar" type="submit" />
    </Container>
  )
}

export default ChangePassword