
import React from 'react'

// Project imports

import UserPicture from 'components/UserPicture'

// Styled components

import { Container, Wrapper, UserInfo, UserData } from './styles'

interface SetttingsProps {

}

const Settings: React.FC<SetttingsProps> = () => {
  return (
    <Container>
      <Wrapper>
        <UserInfo>
          <UserPicture size="140" fullName="Daniel Padilha" />
        </UserInfo>
        <UserData></UserData>
      </Wrapper>
    </Container>
  )
}

export default Settings