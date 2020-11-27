import styled from 'styled-components';
import { transparentize } from 'polished'

// Project imports

import { colors } from 'styles/theme';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  border-radius: 8px;
  height: 40px;
  margin: 16px;

  label, input {
    transition: all 0.2s;
    touch-action: manipulation;
  }

  input:placeholder-shown + label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 2.125rem) scale(1.5);
  }

  input::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }

  input:focus::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s;
  }

  input:not(:placeholder-shown) + label,
  input:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }
`

export const SInput = styled.input`
  flex: 1;
  background: ${transparentize(0.75, colors.black)};
  border: none;
  font-size: 14px;
  padding: 0px 8px;
  color: ${colors.grayLighter};

  &::placeholder {
    color: ${colors.grayLighter};
    font-weight: 500;
  }
`

export const Label = styled.label`
  position: absolute;
  top: -20px;
  left: 4px;
  color: ${colors.orange};
`