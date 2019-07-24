import React from 'react'
import styled from 'styled-components'
import PageWrapper from './PageWrapper'
import ContactForm from '../components/ContactForm'

const ContactFormWrapper = styled.div`
  padding: 40px 0 80px;
  margin: 80px 0 0;
  background: ${props => props.theme.colors.secondaryPink};
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const ContactSection = ({ children }) => (
  <ContactFormWrapper>
    <PageWrapper>
      <TextContainer>
        {children}
        <ContactForm />
      </TextContainer>
    </PageWrapper>
  </ContactFormWrapper>
)

export default ContactSection
