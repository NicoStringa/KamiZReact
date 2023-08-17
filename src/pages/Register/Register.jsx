import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import { Form, LoginContainerStyle, LoginEmailStyle } from './RegisterStyles';
import { registerInitialValues, registerValidationScheme } from '../../formik';
import { createUser } from '../../axios/axios-user';
import { setCurrentUser } from '../../redux/users/usersSlice';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useRedirect from '../../hooks/useRedirect';

const Register = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/');

  return (
    <LoginContainerStyle>
      <h1>Create Account</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationScheme}
        onSubmit={async (values, actions) => {
          const user = await createUser(
            values.name,
            values.email,
            values.password
          );

          if (user) {
            dispatch(
              setCurrentUser({
                ...user.user,
                token: user.token,
              })
            );
          }
          actions.resetForm();
        }}
      >
        <Form>
          <LoginInput type="text" placeholder="Name" name="name" />
          <LoginInput type="text" placeholder="Email" name="email" />
          <LoginInput type="password" placeholder="Password" name="password" />
          <LoginEmailStyle to="/login">
            <p>Alredy have an account? Log In</p>
          </LoginEmailStyle>
          <Submit>Register</Submit>
        </Form>
      </Formik>
    </LoginContainerStyle>
  );
};

export default Register;
