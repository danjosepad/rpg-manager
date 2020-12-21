import styled from 'styled-components'

// Project imports

import { colors } from 'styles/theme'

interface UserProps {
  size?: string | number
  image?: string
}

export const Container = styled.div<UserProps>`
  display: flex;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ image }) => image  ? `
    url(${image}) no-repeat center/100%
  ` : `
    ${colors.orange}
  `};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  & > span {
    font-size: ${({ size }) => `${size as number / 2}px`}
  }
`

export const Name = styled.span`
  color: ${colors.white};
`