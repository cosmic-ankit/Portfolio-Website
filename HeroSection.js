import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  background: #f2f2f2;
  padding: 100px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #000;
`;

const Subheading = styled.p`
  font-size: 18px;
  color: #666;
  margin-top: 20px;
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Heading>Welcome to My Portfolio</Heading>
      <Subheading>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subheading>
    </HeroWrapper>
  );
};

export default HeroSection;
