import styled from 'styled-components'


import { colors } from 'styles/theme'

export const Container = styled.div`
  background: ${colors.black};
  height: 100%;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: center;

  & > div + div {
    margin-left: 40px;
  }

`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`