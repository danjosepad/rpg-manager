import styled, { keyframes, css } from 'styled-components'

// Styles

import { colors } from 'styles/theme'

interface DefaultButton {
  background?: string
  loading?: boolean
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button<DefaultButton>`
  height: 40px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 8px;
  border-radius: 8px;
  background: ${({ background }) => background ? background : colors.green };
  border: none;

  color: ${colors.grayLighter};
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;


    ${({ loading }) => loading && css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
`};
`