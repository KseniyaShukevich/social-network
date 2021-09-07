import type { NextPage } from 'next';
import { ChangeEvent, useState, MouseEvent } from 'react';
import FormLayout from '../components/FormLayout';
import LinkElement from '../components/LinkElement';
import RowFields from '../components/RowFields';

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: MouseEvent) => {
    console.log('LOGIN');
  };

  return (
    <FormLayout heading="Login" textButton="Login" handleSubmit={handleSubmit}>
      <RowFields
        firstLabel="email"
        firstValue={email}
        firstHandleChange={handleChangeEmail}
        secondLabel="password"
        secondTyle="password"
        secondValue={password}
        secondHandleChange={handleChangePassword}
      />
      <LinkElement href="/signup" text="Signup" />
    </FormLayout>
  );
};

export default Login;
