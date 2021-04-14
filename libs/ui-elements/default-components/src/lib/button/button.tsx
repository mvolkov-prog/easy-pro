import React, { ReactNode } from 'react';
import { StyledButton } from './buttonStyles';

export type ButtonProps = {
  children?: ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <StyledButton>
    {children}
  </StyledButton>
);

export default Button;
