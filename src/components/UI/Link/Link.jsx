import React from 'react';
import { ContainerLinkStyle, StyleLink } from './LinkStyles';

const Link = ({ radius = '32', to = '/' }) => {
  return (
    <ContainerLinkStyle whileTap={{ scale: 0.95 }}>
      <StyleLink radius={radius} to={to}>
        <span> Back </span>
      </StyleLink>
    </ContainerLinkStyle>
  );
};

export default Link;
