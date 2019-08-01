import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

// import Logo from '../../components/Logo'
// import Locations from '../../components/Locations'
import PageWrapper from '../../components/PageWrapper'
import SubscribeForm from '../../components/SubscribeForm'

const Container = styled.div`
  background-color: #6E2B6D;
  color: #fff;
  padding: 70px 0;
  margin-top: auto;
  border-top: 5px solid ${props => props.theme.colors.primaryYellow};
`

const Wrapper = styled(PageWrapper)`
  display: grid;
  max-width: 400px;
  grid-template-rows: auto auto;
  // grid-column-gap: 30px;
  // grid-row-gap: 75px;
  grid-template-areas:
    'menu colophon'
    'form'
    'locations';
    

  @media (min-width: 768px) {
    grid-template-areas:
      'menu locations'
      'form colophon';
    // grid-template-columns: 2fr 3fr;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const MenuItem = styled(Link)`
  flex-grow: 0;
  font-size: 0.8rem;
  border-bottom: 2px transparent solid;
  margin-bottom: 15px;
  padding-bottom: 1px;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 0.5rem;
    margin-bottom: 5px;
  }

  &:link,
  &:visited {
    color: ${props => props.theme.colors.lightGrey};
    text-transform: uppercase;
    text-decoration: none;
  }

  &:hover {
    color: ${props => props.theme.colors.white};
    border-bottom-color: ${props => props.theme.colors.primaryYellow};
  }
`

const Colophon = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.lightGrey};
  font-size: 0.65rem;
  grid-area: colophon;
  line-height: 1.6;
  text-align: end;

`

const LogoContainer = styled(Link).attrs(() => ({
  to: '/',
}))`
  display: block;
  width: 175px;
  padding-bottom: 20px;
`

const ColophonLink = styled(Link)`
  &:link,
  &:visited {
    color: ${props => props.theme.colors.lightGrey};
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.primaryYellow};
  }
`

const Footer = ({ toggleVisibility }) => (
  <Container>
    <Wrapper>
      <Menu onClick={toggleVisibility}>
        <MenuItem to="/">Home</MenuItem>
        {/* <MenuItem to="/services">Services</MenuItem> */}
        <MenuItem to="/training">Training</MenuItem>
        {/* <MenuItem to="/fund">Fund</MenuItem> */}
        {/* <MenuItem to="/careers">Careers</MenuItem> */}
        <MenuItem to="/blog">Blog</MenuItem>
        <MenuItem to="/about">About</MenuItem>
      </Menu>
      {/* <SubscribeForm /> */}
      <Colophon>
        <LogoContainer>
          {/* <Logo inverse /> */}
        </LogoContainer>
        &copy; {new Date().getFullYear()} Purple Panther Marketing All Rights
        Reserved. <br />
        <ColophonLink to="/privacy-policy">Privacy Policy</ColophonLink>
        &nbsp;&middot;&nbsp;
        <ColophonLink to="/terms-and-conditions">
          Terms &amp; Conditions
        </ColophonLink>
      </Colophon>
    
    </Wrapper>
  </Container>
)

export default Footer
