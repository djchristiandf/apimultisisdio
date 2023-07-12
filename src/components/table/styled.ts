import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 16px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

export const TableData = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #333;
`;
