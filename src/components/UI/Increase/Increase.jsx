import React from 'react';
import { IncreaseStyle } from './IncreaseStyles';

const Increase = ({
  children,
  bgColor,
  disabled = false,
  onClick = e => e.preventDefault(),
}) => {
  return (
    <IncreaseStyle
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1}}
      bgColor={bgColor}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IncreaseStyle>
  );
};

export default Increase;