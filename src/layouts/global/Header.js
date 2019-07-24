import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

// import Logo from '../../components/Logo'
import PageWrapper from '../../components/PageWrapper'
import Nav from '../../components/Nav'

const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100%;
`

const Inner = styled(PageWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

  @media (min-width: 768px) {
    padding: 0 30px;
  }
`

const Header = ({ open, toggleVisibility }) => (
  <Container>
    <Inner>
      <Link to="/">
        {/* <Logo /> */}
      </Link>

      <Nav open={open} toggleVisibility={toggleVisibility} />
    </Inner>
  </Container>
)

export default Header
