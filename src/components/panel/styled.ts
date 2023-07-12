import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e5e5e5;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const Content = styled.div`
  padding: 16px;
`;
