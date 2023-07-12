import React from 'react';
import { Container, TableContainer, TableHeader, TableRow, TableData } from './styled';

interface TableProps {
  headers: string[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <Container>
      <TableContainer>
        <thead>
          <TableRow>
            {headers.map(header => (
              <TableHeader key={header}>{header}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {headers.map(header => (
                <TableData key={header}>{row[header]}</TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </Container>
  );
};

export default Table;
