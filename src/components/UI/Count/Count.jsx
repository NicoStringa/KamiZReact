import React from 'react';
import { CountStyle } from './CountStyles';

const Count = ({ children }) => {
  return <CountStyle>{children}</CountStyle>;
};

export default Count;
