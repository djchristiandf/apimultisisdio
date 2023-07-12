import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #00b4d8;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0096c7;
  }

  &:active {
    background-color: #0077a9;
  }
`;
