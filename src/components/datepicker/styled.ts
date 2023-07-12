import styled from 'styled-components';

export const DatepickerContainer = styled.div`
  position: relative;

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

export const Calendar = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(7, 1fr);
  left: 0;
  padding: 8px;
  position: absolute;
  top: calc(100% + 8px);
  width: calc(100% + 16px);
`;

export const Day = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #ddd;
  }
`;
