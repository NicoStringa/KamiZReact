import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginContainerStyle,
  LoginEmailStyle,
  LoginPasswordStyle,
} from './LoginStyles';

const Login = () => {
  return (
    <LoginContainerStyle>
      <h1>Log In</h1>
      <Formik>
        <Form>
          <LoginInput type='text' placeholder='Email' />
          <LoginInput type='password' placeholder='Password' />
          <Link to='/forgot-password'>
            <LoginPasswordStyle>
              Forgot password?
            </LoginPasswordStyle>
          </Link>
          <Link to='/register'>
            <LoginEmailStyle>You do not have an account? Register here</LoginEmailStyle>
          </Link>
          <Submit type='button' onClick={e => e.preventDefault()}>
            Login
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyle>
  );
};

export default Login;