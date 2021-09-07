import type { NextPage } from 'next';
import FormLayout from '../components/FormLayout';
import RowFields from '../components/RowFields';
import LinkElement from '../components/LinkElement';
import { ChangeEvent, useState, MouseEvent } from 'react';

const Signup: NextPage = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: MouseEvent) => {
    if (firstName && lastName && email && password) {
      const response: any = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
    }
  };

  return (
    <FormLayout
      heading="signup"
      textButton="signup"
      handleSubmit={handleSubmit}
    >
      <RowFields
        firstLabel="first name"
        firstValue={firstName}
        secondLabel="last name"
        secondValue={lastName}
        firstHandleChange={handleChangeFirstName}
        secondHandleChange={handleChangeLastName}
      />
      <RowFields
        firstLabel="email"
        firstValue={email}
        secondLabel="password"
        secondTyle="password"
        secondValue={password}
        firstHandleChange={handleChangeEmail}
        secondHandleChange={handleChangePassword}
      />
      <LinkElement href="/" text="Login" />
    </FormLayout>
  );
};

export default Signup;
