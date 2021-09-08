import type { NextPage } from 'next';
import FormLayout from '../components/FormLayout';
import LinkElement from '../components/LinkElement';
import RowFields from '../components/RowFields';
import { Formik } from 'formik';
import * as yup from 'yup';
import IUserLogin from '../interfaces/IUserLogin';

const Login: NextPage = () => {
  const onSubmit = async (data: IUserLogin): Promise<void> => {
    const response: any = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
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
