import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #000;
  padding: 20px;
  color: #fff;
`;

const Logo = styled.a`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo href="/">Portfolio</Logo>
    </Nav>
  );
};

export default Navbar;
