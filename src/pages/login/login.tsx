import React, { useState } from 'react';
import Router from 'next/router';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { authenticate } from '../../services/api';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await authenticate(username, password);
      Router.push('/search');
    } catch (err) {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
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
    </div>
  );
};

export default LoginPage;