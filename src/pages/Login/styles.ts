import styled from 'styled-components'


// Project imports

import { colors, shadows } from 'styles/theme'
import { H1, Span } from 'styles/fonts';

export const Container = styled.div`
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const LoginWrapper = styled.form`
  background: ${colors.grayDark};
  border-radius: 8px;
  box-shadow: ${shadows.default};
  padding: 24px 16px;
  max-width: 300px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
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