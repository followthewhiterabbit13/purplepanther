import React from 'react'
import styled from 'styled-components'

import Img from './Img'
import _Link from './Link'
// import { capitalize } from '../utils/string'

const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.black};
  padding: 20px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`

const PartnershipBox = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.7rem;
  margin: 20px 0 10px;
  text-transform: uppercase;
`

const Lines = styled.ul`
  list-style: none;
  margin: 0;
`

const LineItem = styled.li`
  font-size: 0.8rem;
  line-height: 1.5;
  font-family: ${props => props.theme.fonts.secondary};
`

const ImgContainer = styled.div`
  width: 50%;
`

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Link = styled(_Link)`
  text-align: right;
  padding: 10px;
`

const AcceleratorBox = ({
  name,
  logo,
  logoBlack,
  cohorts = [],
  partner,
  homepage,
  applicationLink,
}) => (
  <Container>
    <ImgContainer>
      <Img src={logoBlack?.fields?.file?.url} alt={logo?.fields?.file?.title} />
    </ImgContainer>
    <PartnershipBox>In partnership with: {partner.fields.name}</PartnershipBox>
    {cohorts.length > 0 && (
      <Lines>
        <LineItem>
          <strong>Theme: </strong>
          {cohorts[0].fields.theme}
        </LineItem>
        <LineItem>
          <strong>Status: </strong>
          {cohorts[0].fields.status}
        </LineItem>
        <LineItem>
          <strong>Application type: </strong>
          {cohorts[0].fields.applicationStatus}
        </LineItem>
      </Lines>
    )}
    <LinkContainer>
      {applicationLink && <Link href={`${applicationLink}`}>Apply Now</Link>}
      <Link href={`${homepage}`}>Learn More</Link>
    </LinkContainer>
  </Container>
)

export default AcceleratorBox
