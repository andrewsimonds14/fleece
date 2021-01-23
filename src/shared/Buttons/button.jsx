import React from 'react';
import { StyledButton } from './button.styles';

const Button = (props) => (
  <StyledButton
    primary={props.primary}
    warning={props.warning}
    inactive={props.inactive}
    onClick={props.onClick}
		>
    {props.children}
  </StyledButton>
);

export default Button;
