import type { NextPage } from 'next';
import FormLayout from '../components/FormLayout';
import LinkElement from '../components/LinkElement';
import RowFields from '../components/RowFields';
import { Formik } from 'formik';
import * as yup from 'yup';
import IUserLogin from '../interfaces/IUserLogin';
import request from '../services/request';
import UserResponse from '../interfaces/UserResponse';
import MessageResponse from '../interfaces/MessageResponse';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const router = useRouter();

  const onSubmit = async (data: IUserLogin): Promise<void> => {
    const response: UserResponse | MessageResponse = await request('login', data);
    if ((response as UserResponse).user) {
      router.push(`/account/${(response as UserResponse).user.id}`);
    }
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .typeError('Should be string')
      .email('Input correct email')
      .required('Requred'),
    password: yup.string().typeError('Should be string').required('Requred'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <FormLayout
          heading="login"
          disabled={!isValid && !dirty}
          textButton="login"
          handleSubmit={handleSubmit}
        >
          <RowFields
            firstName={'email'}
            firstLabel={'Email'}
            firstValue={values.email}
            firstType={'email'}
            firstError={!!(touched.email && errors.email)}
            firstTextError={errors.email}
            firstHandleBlur={handleBlur}
            firstHandleChange={handleChange}
            secondName={'password'}
            secondLabel={'Password'}
            secondValue={values.password}
            secondTyle={'password'}
            secondError={!!(touched.password && errors.password)}
            secondTextError={errors.password}
            secondHandleBlur={handleBlur}
            secondHandleChange={handleChange}
          />
          <LinkElement href="/signup" text={'Signup'} />
        </FormLayout>
      )}
    </Formik>
  );
};

export default Login;
