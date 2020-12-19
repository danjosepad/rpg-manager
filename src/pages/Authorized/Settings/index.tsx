import React from 'react'

// Project imports

// Styled components

import { Container, Wrapper, UserInfo, UserData } from './styles'

interface SetttingsProps {

}

const Settings: React.FC<SetttingsProps> = () => {
  return (
    <Container>
      <Wrapper>
        <UserInfo></UserInfo>
        <UserData></UserData>
      </Wrapper>
    </Container>
  )
}

export default Settings