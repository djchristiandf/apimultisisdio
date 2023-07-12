import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  background-color: #2b2d42;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  justify-content: center;
`;

export const CardTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  margin: 16px;
`;

export const CardContent = styled.div`
  color: #333;
  font-size: 16px;
  padding: 16px;
`;

export const CardFooter = styled.div`
  align-items: center;
  background-color: #2b2d42;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  color: #fff;
  display: flex;
  font-size: 14px;
  justify-content: center;
  padding: 8px;
`;
