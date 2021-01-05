
import React from 'react'

// Project imports

import UserPicture from 'components/UserPicture'
import { H3 as Name, H2 } from 'styles/fonts'
import Input from 'components/Input'
import Button from 'components/Button'

// Styled components

import { Container, Wrapper, UserInfo, UserData, Link } from './styles'


interface SetttingsProps {

}

const Settings: React.FC<SetttingsProps> = () => {
  return (
    <Container>
      <Wrapper>
        <UserInfo>
          <UserPicture size="100" fullName="Daniel Padilha" />
          <Name>Daniel José Padilha</Name>
        </UserInfo>
        <UserData>
          <H2>Confirme seus dados</H2>
          <Input
            label="E-mail"
            value="Teste"
          />
          <Input
            label="Nome"
            value="Teste"
          />
          <Link to="/change-password">
            <Button text="Alterar sua senha"/>
          </Link>
        </UserData>
      </Wrapper>
    </Container>
  )
}

export default Settings