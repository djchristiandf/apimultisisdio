import { useState } from 'react';
import Router from 'next/router';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { authenticate } from '../../services/api';
import React from 'react';
import Header from '../../components/header/Header';
import Panel from '../../components/panel/Panel';
import Container from '../../components/container/Container';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await authenticate(username, password);
      Router.push('/search');
    } catch (err) {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <>
      <Header onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Container>
        <Panel title="Login">
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Entrar</Button>
          </form>
          {error && <p>{error}</p>}
        </Panel>
      </Container>
    </>
  );
}
