import React from 'react';

import { InputContainerStyle, LoginInputStyle } from './LoginInputStyles';

const LoginInput = ({ type, placeholder }) => {
  return (
    <InputContainerStyle>
      <LoginInputStyle type={type} placeholder={placeholder} />
    </InputContainerStyle>
  );
};

export default LoginInput;
