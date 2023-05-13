import React from 'react';
import { ButtonSubmitStyle } from './SubmitStyles';

const Submit = ({ children, onClick, disabled = false }) => {
  return (
    <ButtonSubmitStyle
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      onClick={onClick}
      type='submit'
    >
      {children}
    </ButtonSubmitStyle>
  );
};

export default Submit;