import type { NextPage } from 'next';
import FormLayout from '../components/FormLayout';
import LinkElement from '../components/LinkElement';
import RowFields from '../components/RowFields';

const Login: NextPage = () => {
  return (
    <FormLayout heading="Login" textButton="Login">
      <RowFields
        firstLabel="email"
        secondLabel="password"
        secondTyle="password"
      />
      <LinkElement href="/signup" text="Signup" />
    </FormLayout>
  );
};

export default Login;
