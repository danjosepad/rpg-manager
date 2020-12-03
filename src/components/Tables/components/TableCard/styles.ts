
import styled from 'styled-components'

// Styles

import { colors, shadows } from 'styles/theme'


interface ContainerProps {
  img?: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 250px;
  min-height: 140px;
  padding: 24px 16px;
  margin: 8px 8px;

  background: ${({ img }) => img ?
  `${colors.grayDark} url(${img}) no-repeat center;`
   : colors.grayDark};
  border-radius: 8px;
  box-shadow: ${shadows.default};

  cursor: pointer;
`