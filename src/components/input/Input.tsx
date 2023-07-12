import React, { InputHTMLAttributes } from 'react';
import { InputContainer } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <input {...rest} />
    </InputContainer>
  );
};

export default Input;
