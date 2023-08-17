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
import { loginInitialValues, loginValidationSchema } from '../../formik';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../axios/axios-user';
import { setCurrentUser } from '../../redux/users/usersSlice';
import useRedirect from '../../hooks/useRedirect';

const Login = () => {
  const dispatch = useDispatch();
  useRedirect('/');

  return (
    <LoginContainerStyle>
      <h1>Log In</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);

          if (user) {
            dispatch(
              setCurrentUser({
                ...user.user,
                token: user.token,
              })
            );
          }
        }}
      >
        <Form>
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <Link to="/forgot-password">
            <LoginPasswordStyle>Forgot password?</LoginPasswordStyle>
          </Link>
          <Link to="/register">
            <LoginEmailStyle>
              You do not have an account? Register here
            </LoginEmailStyle>
          </Link>
          <Submit>Login</Submit>
        </Form>
      </Formik>
    </LoginContainerStyle>
  );
};

export default Login;
