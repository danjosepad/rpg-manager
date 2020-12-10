import React from 'react';


// Project imports

import { H4 as NameInfo } from 'styles/fonts'

// Styled components

import { Container, Settings } from './styles'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <NameInfo>Olá, Daniel</NameInfo>
      <Settings size={30} />
    </Container>
  )
}

export default Header