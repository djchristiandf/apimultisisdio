import React, { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
