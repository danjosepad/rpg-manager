import styled, { keyframes } from 'styled-components'
import { transparentize } from 'polished'

// Project imports

import { colors, shadows } from 'styles/theme'


const scrollTop = keyframes`
  from {
    top: 100px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: ${transparentize(0.60, colors.black)};
  transition: background 0.2s;
`

export const Container = styled.div`
  position: relative;
  margin: 15% auto;
  max-width: 600px;
  width: 85%;
  border-radius: 16px;
  box-shadow: ${shadows.default};
  background: ${colors.grayDark};
  animation: ${scrollTop} 0.5s;
`

export const Title = styled.div`
  box-shadow: ${shadows.bottom};
  font-size: 28px;
  line-height: 32px;
  color: ${colors.grayLight};
  font-weight: 500;
  padding: 20px 20px 10px 20px;
`

export const Content = styled.div`
  padding: 20px;
`

export const ExitButton = styled.button`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
`