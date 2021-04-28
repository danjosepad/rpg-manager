import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5'

// Project imports

import { H4 as NameInfo } from 'styles/fonts'
import { HeaderProps } from './Header.props'

// Styled components

import { Container, Settings } from './styles'

const Header = ({}: HeaderProps) => {
  return (
    <Container>
      <NameInfo color="white">Olá, Daniel</NameInfo>
      <Settings to="/settings">
        <IoSettingsSharp size={30} />
      </Settings>
    </Container>
  )
}

export default Header