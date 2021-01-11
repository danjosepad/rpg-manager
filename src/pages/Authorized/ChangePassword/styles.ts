import styled from 'styled-components'

// Project imports

import { colors } from 'styles/theme'

export const Container = styled.div`
  background: ${colors.black};
  height: 100%;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`