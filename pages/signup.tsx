import type { NextPage } from 'next';
import FormLayout from '../components/FormLayout';
import RowFields from '../components/RowFields';
import LinkElement from '../components/LinkElement';
import { Formik } from 'formik';
import * as yup from 'yup';
import IUserRequest from '../interfaces/IUserRequest';
import request from '../services/request';

const Signup: NextPage = () => {
  const onSubmit = async (data: IUserRequest) => {
    const response: any = await request('signup', data);
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().typeError('Should be string').required('Requred'),
    lastName: yup.string().typeError('Should be string').required('Requred'),
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
        firstName: '',
        lastName: '',
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
          heading="signup"
          disabled={!isValid && !dirty}
          textButton="signup"
          handleSubmit={handleSubmit}
        >
          <RowFields
            firstName={'firstName'}
            firstLabel={'First name'}
            firstValue={values.firstName}
            firstType={'text'}
            firstError={!!(touched.firstName && errors.firstName)}
            firstTextError={errors.firstName}
            firstHandleBlur={handleBlur}
            firstHandleChange={handleChange}
            secondName={'lastName'}
            secondLabel={'Last name'}
            secondValue={values.lastName}
            secondTyle={'text'}
            secondError={!!(touched.lastName && errors.lastName)}
            secondTextError={errors.lastName}
            secondHandleBlur={handleBlur}
            secondHandleChange={handleChange}
          />
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
          <LinkElement href="/" text={'Login'} />
        </FormLayout>
      )}
    </Formik>
  );
};

export default Signup;
