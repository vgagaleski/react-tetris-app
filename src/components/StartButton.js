import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start button</StyledStartButton>
);

export default StartButton;
