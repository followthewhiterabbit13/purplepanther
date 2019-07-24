import React from 'react'
import styled from 'styled-components'

import Company from './Company'
import PageWrapper from './PageWrapper'

const Container = styled.div`
  background-color: ${props => props.theme.colors.offWhite};
  padding: 80px 0;
`

const CompanyWrapper = styled.div`
  display: grid;
  grid-gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Title = styled.h2`
  margin-bottom: 80px;

  &:after {
    display: block;
    content: ' ';
    height: 1px;
    background-color: ${props => props.theme.colors.darkerGrey};
    width: 80px;
    margin: 40px 0;
  }
`

const Disclaimer = styled.div`
  margin: 40px 0;
  font-size: 0.8rem;
  font-family: ${props => props.theme.fonts.secondary};
`

const Portfolio = ({ title, companies, children }) => (
  <Container>
    <PageWrapper>
      <Title>{title}</Title>
      <CompanyWrapper>
        {companies.map(i => (
          <Company key={i.slug} {...i} />
        ))}
      </CompanyWrapper>

      <Disclaimer>{children}</Disclaimer>
    </PageWrapper>
  </Container>
)

export default Portfolio
