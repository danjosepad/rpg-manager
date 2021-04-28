import styled from 'styled-components'

// Project imports

import Input from 'components/Input'
import Button from 'components/Button'
import { colors } from 'styles/theme'
import { H1, Span } from 'styles/fonts'

export const Container = styled.div`
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Form = styled.form`
  padding: 24px 16px;
  max-width: 600px;
  width: 100%;

  display: flex;
  align-items: baseline;
`


export const Title = styled(H1).attrs({
  color: colors.orange
})`
  margin-bottom: 32px;
`;

export const Description = styled(Span).attrs({
  color: colors.orange
})`
  margin-bottom: 16px;
`

export const SButton = styled(Button)`
  max-width: 120px;
`

export const SInput = styled(Input)`
  background: ${colors.grayDark};
`