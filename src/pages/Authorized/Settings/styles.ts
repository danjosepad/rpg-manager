import styled from 'styled-components'


import { colors } from 'styles/theme'

export const Container = styled.div`
  background: ${colors.black};
  height: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: center;

`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`