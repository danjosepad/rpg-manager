import styled, { keyframes } from 'styled-components'
import { IoSettingsSharp } from 'react-icons/io5'

// Project imports

import { colors, shadows } from 'styles/theme'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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

export const Settings = styled(IoSettingsSharp)`
  color: white;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${getRandomColor};
    animation: ${rotate} 4s linear infinite;
  }
`