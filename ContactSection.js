import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  background: #f2f2f2;
  padding: 100px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 30px;
  color: #000;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ContactSection = () => {
  return (
    <ContactWrapper>
      <Heading>Contact Me</Heading>
      <ContactForm>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Message" rows="4" />
        <Button>Send Message</Button>
      </ContactForm>
    </ContactWrapper>
  );
};

export default ContactSection;
