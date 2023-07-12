import styled from 'styled-components';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const Logo = styled.div`
  height: 32px;
  width: 32px;

  svg {
    fill: #2b2d42;
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #2b2d42;
`;

export const LogoutButton = styled.button`
  background-color: #fff;
  border: none;
  color: #2b2d42;
  cursor: pointer;
`;
