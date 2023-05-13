import React from 'react';

import { ErrorMessageStyle, InputBoxStyle, InputLabelStyle, InputStyle } from './InputStyles';
import { ErrorMessage, Field } from 'formik';

const Input = ({ children, htmlFor, type, id, placeholder, name }) => {
  return (
    <Field name={name}>
      {({field, form: {errors, touched}}) => (
        <InputBoxStyle>
        <InputLabelStyle htmlFor={htmlFor}>{children}</InputLabelStyle>
        <InputStyle type={type} id={id} placeholder={placeholder} {...field} isError={errors[field.name] && touched[field.name]}/>
        <ErrorMessage name={field.name}>
          {message => <ErrorMessageStyle>{message}</ErrorMessageStyle>}
        </ErrorMessage>
      </InputBoxStyle>
      )}
    </Field>
  );
};

export default Input;