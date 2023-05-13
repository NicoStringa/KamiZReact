import React from 'react';
import { StyleButton } from './ButtonStyles';

const Button = ({
  children,
  radius = '32',
  secondary,
  disabled = false,
  onClick = e => e.preventDefault(),
}) => {
  return (
    <StyleButton
      disabled={disabled}
      onClick={onClick}
      secondary={secondary}
      radius={radius}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1}}
    >
      {children}
    </StyleButton>
  );
};

export default Button;