import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainerStyle, LinksContainerStyle } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainerStyle>
      <LinksContainerStyle className='links'>
        <Link to='/' >
          Products
        </Link>
        <Link to='/' >
          Customer Care
        </Link>
        <Link to='/' >
          Help & Support
        </Link>
        <Link to='/' >
          Company Info
        </Link>
      </LinksContainerStyle>
    </FooterContainerStyle>
  );
};

export default Footer;
