import React from 'react';
import { Container, Header, Title, Content } from './styled';

interface PanelProps {
  title: string;
  children: React.ReactNode; 
}

const Panel: React.FC<PanelProps> = ({ title, children }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Panel;
