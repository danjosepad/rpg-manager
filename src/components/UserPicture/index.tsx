import React from 'react'

// Project imports

import { getInitials } from './utils/getInitials'

// Styled components

import { Container, Name } from './styles'

interface UserPictureProps {
  className?: string
  fullName?: string
  size?: string
  img?: string
}

const UserPicture: React.FC<UserPictureProps> = ({ className, fullName, size = "40", img}) => {
  const userInitials = getInitials(fullName)

  return (
    <Container
      className={className}
      size={size}
      image={img}
    >
      {fullName && !img && (
        <Name>{userInitials}</Name>
      )}
    </Container>
  )
}

export default UserPicture