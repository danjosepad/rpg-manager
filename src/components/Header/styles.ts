import styled, { keyframes } from 'styled-components'

import { Link } from 'react-router-dom'

// Project imports

import { colors, shadows } from 'styles/theme'
import { getRandomColor } from './utils/getRandomColor'


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  height: 60px;
  background: ${colors.grayDarker};
  box-shadow: ${shadows.default};
  position: sticky;
  top: 0px;

  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
`

export const Settings = styled(Link)`

  svg {
    color: white;
    transition: color 0.2s;

    &:hover {
      cursor: pointer;
      color: ${getRandomColor};
      animation: ${rotate} 4s linear infinite;
    }
  }
`