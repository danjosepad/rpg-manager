import React from 'react'
import { screen, render } from '@testing-library/react'

import UserPicture from './UserPicture'
import { UserPictureProps } from './UserPicture.props'
import { UserPictureMock } from './UserPicture.mocks'

import { getInitials } from './utils/getInitials'

const mountComponent = (props: UserPictureProps) => render(<UserPicture {...props} />)

const ELEMENTS = {
  CONTAINER: 'user-picture__container'
}

describe('<UserPicture />', () => {
  it('should render data properly', () => {
    const makeItem = UserPictureMock()
    mountComponent(makeItem)

    expect(screen.getByTestId(ELEMENTS.CONTAINER)).toHaveStyle({
      backgroundImage: `url(${makeItem.img}) no-repeat center/100%`,
      height: `${makeItem.size}px`,
      width: `${makeItem.size}px`,
    })

  })

  it('should render user initials with has fullName and no image', () => {
    const makeItem = UserPictureMock({
      img: undefined
    })
    mountComponent(makeItem)

    expect(screen.getByText(getInitials(makeItem.fullName))).toBeInTheDocument()
  })

  it('should render default props properly', () => {
    const makeItem = UserPictureMock({
      size: undefined
    })
    mountComponent(makeItem)

    expect(screen.getByTestId(ELEMENTS.CONTAINER)).toHaveStyle({
      backgroundImage: `url(${makeItem.img}) no-repeat center/100%`,
      height: '40px',
      width: '40px',
    })
  })
})