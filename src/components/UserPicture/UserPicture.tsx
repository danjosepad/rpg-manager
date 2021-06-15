import React from 'react'

// Project imports

import { getInitials } from './utils/getInitials'
import { UserPictureProps } from './UserPicture.props'
import { Container, Name } from './UserPicture.style'

const UserPicture = ({ className, fullName, size = "40", img}: UserPictureProps) => {
  const userInitials = getInitials(fullName)

  return (
    <Container
      className={className}
      size={size}
      image={img}
      data-testid="user-picture__container"
    >
      {fullName && !img && (
        <Name>{userInitials}</Name>
      )}
    </Container>
  )
}

export default UserPicture