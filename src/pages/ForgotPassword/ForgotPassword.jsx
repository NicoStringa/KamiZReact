import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  ForgotContainerStyle,
  ForgotEmailStyle,
  Form,
} from './ForgotPasswordStyles';

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <ForgotContainerStyle>
      <h1>Restore your password</h1>
      <Formik>
        <Form>
          <LoginInput type='text' placeholder='Your Email' />
          <ForgotEmailStyle onClick={() => navigate('/login')}>
            Remember your password? Log In
          </ForgotEmailStyle>
          <Submit type='button' onClick={e => e.preventDefault()}>
            Login
          </Submit>
        </Form>
      </Formik>
    </ForgotContainerStyle>
  );
};

export default ForgotPassword;