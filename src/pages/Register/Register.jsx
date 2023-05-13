import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginContainerStyle,
  LoginEmailStyle,
} from './RegisterStyles';

const Register = () => {
  return (
    <LoginContainerStyle>
      <h1>Create Account</h1>
      <Formik>
        <Form>
          <LoginInput type='text' placeholder='Name' />
          <LoginInput type='text' placeholder='Email' />
          <LoginInput type='password' placeholder='Password' />
          <LoginEmailStyle to='/login'>
            <p>Alredy have an account? Log In</p>
          </LoginEmailStyle>
          <Submit type='button' onClick={e => e.preventDefault()}>
            Register
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyle>
  );
};

export default Register;