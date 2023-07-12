import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    color: #fff;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    color: #fff;
    font-size: 16px;
    padding: 8px 0;
    transition: border-color 0.2s ease-in-out;

    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }

    &:focus {
      outline: none;
      border-color: #00b4d8;
    }
  }
`;
