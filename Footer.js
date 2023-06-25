import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #000;
  padding: 20px;
  color: #fff;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>&copy; 2023 My Portfolio. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
