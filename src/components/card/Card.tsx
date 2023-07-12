import React from 'react';
import { CardContainer, CardHeader, CardTitle, CardContent, CardFooter } from './styled';

interface CardProps {
  title: string;
  content: string;
  footer: string;
}

const Card: React.FC<CardProps> = ({ title, content, footer }) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </CardContainer>
  );
};

export default Card;
