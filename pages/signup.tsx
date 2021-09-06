import type { NextPage } from 'next';
import FormLayout from '../components/FormLayout';
import RowFields from '../components/RowFields';
import LinkElement from '../components/LinkElement';

const Signup: NextPage = () => {
  return (
    <FormLayout heading="signup" textButton="signup">
      <RowFields firstLabel="first name" secondLabel="last name" />
      <RowFields
        firstLabel="email"
        secondLabel="password"
        secondTyle="password"
      />
      <LinkElement href="/" text="Login" />
    </FormLayout>
  );
};

export default Signup;
