import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  background: #fff;
  padding: 100px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 30px;
  color: #000;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-top: 20px;
`;

const AboutSection = () => {
  return (
    <AboutWrapper>
      <Heading>About Me</Heading>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt enim nec dolor cursus, in viverra tortor consectetur.</Description>
    </AboutWrapper>
  );
};

export default AboutSection;
