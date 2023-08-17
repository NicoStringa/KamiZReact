import React from 'react';

import {
  ErrorMessageStyle,
  InputContainerStyle,
  LoginInputStyle,
} from './LoginInputStyles';
import { ErrorMessage, Field } from 'formik';

const LoginInput = ({ type, placeholder, name }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyle>
          <LoginInputStyle
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyle>{message}</ErrorMessageStyle>}
          </ErrorMessage>
        </InputContainerStyle>
      )}
    </Field>
  );
};

export default LoginInput;
