import React from 'react'
import styled from 'styled-components'

import Checkbox from './Checkbox'
import Button from './Button'

const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  border: 2px solid
    ${props =>
      props.inverse
        ? props.theme.colors.lighterGrey
        : props.theme.colors.black};
  border-radius: 8px;
`

const TextInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid
    ${props =>
      props.inverse
        ? props.theme.colors.lighterGrey
        : props.theme.colors.black};
  border-radius: 8px;
`

const ContactFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Heading = styled.h2``

const FormContainer = styled.form.attrs({
  id: 'ContactForm',
  method: 'POST',
  name: 'ContactForm',
  'data-netlify': 'true',
  action: '/success',
})`
  width: 80%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: left;
`

const ContactForm = ({ inverse, recaptcha, hideTitle }) => (
  <ContactFormContainer>
    {console.log(inverse)}
    {!hideTitle && <Heading>Contact us</Heading>}
    <FormContainer  >
      <Input
        type="text"
        name="name"
        placeholder="Your name"
        inverse={inverse}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your email"
        inverse={inverse}
        required
      />
      <Input
        type="text"
        name="company"
        placeholder="Company"
        inverse={inverse}
        required
      />
      <TextInput name="message" placeholder="Message" inverse={inverse} required />
     
      {recaptcha ? <div data-netlify-recaptcha /> : null}
      <input type="hidden" name="page" value="ContactForm" />
      <input type="hidden" name="form-name" value="ContactForm" />
      <Button type="submit">Send</Button>
    </FormContainer>
  </ContactFormContainer>
)

export default ContactForm
