import React from 'react'
import styled from 'styled-components'

import { Form as _Form, Input } from './forms/.'
import Button from './Button'

const Title = styled.h4`
  color: ${props => props.theme.colors.lighterGrey};
  margin-bottom: 10px;
  font-size: 1rem;
`

const FormInner = styled.div`
  display: grid;
  grid-gap: 20px;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Form = styled(_Form)`
  display: flex;
  flex-direction: column;
  gird-area: form;
`

const FormCopy = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  padding: 0 0 10px;
  font-size: 0.8rem;
  line-height: 1.5;
`

const ButtonContainer = styled.div`
  text-align: right;
`

const SubscribeForm = ({ formName, netlifyForm, recaptcha }) => (
  <Form netlifyForm={netlifyForm}>
    <Title>Subscribe to our newsletter</Title>
    <FormCopy>
      Be the first to hear about Highline Beta events, resources, insights, and
      accelerator programs.
    </FormCopy>
    <FormInner>
      <Input
        name="firstName"
        placeholder="First name"
        caption="First Name"
        required
        reverse
        small
      />
      <Input
        type="email"
        name="email"
        placeholder="you@domain.com"
        caption="Email"
        required
        reverse
        small
      />
      {recaptcha ? <div data-netlify-recaptcha /> : null}
      <Input type="hidden" name="page" value={formName} />
      <Input type="hidden" name="subscribe" value="newsletter" />
      <Input type="hidden" name="form-name" value="SubscribeForm" />
    </FormInner>
    <ButtonContainer>
      <Button type="submit" small inverse>
        Subscribe
      </Button>
    </ButtonContainer>
  </Form>
)

export default SubscribeForm
