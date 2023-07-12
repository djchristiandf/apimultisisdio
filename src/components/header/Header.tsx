import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, Title, LogoutButton } from './styled';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.5 3c-2.5 0-4.6 1.8-5 4.2-.1.6.2 1.1.7 1.3.6.2 1.1-.2 1.3-.7.2-1.3 1.4-2.3 2.9-2.3s2.7 1 2.9 2.3c.1.6.7 1 1.3.7.6-.1 1-.7.7-1.3C20.1 4.8 18 3 15.5 3zM12 9c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.8 0 5-2.2 5-5s-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z" />
        </svg>
      </Logo>
      <Title>API Multi SISDIO</Title>
      <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;
