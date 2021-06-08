import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5'

// Project imports

import { H4 as NameInfo } from 'styles/fonts'
import { Container, Settings } from './styles'
import { HeaderProps } from './Header.props'

const Header = ({ name }: HeaderProps) => {
  return (
    <Container>
      <NameInfo color="white">Olá, {name}</NameInfo>
      <Settings to="/settings">
        <IoSettingsSharp size={30} />
      </Settings>
    </Container>
  )
}

export default Header