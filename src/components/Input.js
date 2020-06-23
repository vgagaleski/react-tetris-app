import React from 'react';
import { StyledInputWrapper, StyledInput } from './styles/StyledInput';

const Input = ({ text, userName, callback, disabled }) => (
  <StyledInputWrapper>
    {text}
    <StyledInput value={userName} onChange={callback} disabled={disabled} />
  </StyledInputWrapper>
);

export default Input;
