import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { authenticate } from '../services/api';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const checkAuthentication = async () => {
    try {
      // Lógica de verificação de autenticação
      const isAuthenticated = await authenticate(username, password);

      if (!isAuthenticated && Router.pathname !== '/login') {
        Router.push('/login');
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
