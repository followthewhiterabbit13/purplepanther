import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
// import Media from 'react-media'

import Logo from '../components/Logo'
import PageWrapper from '../components/PageWrapper'
// import toggleIcon from '../img/nav-toggle-icon.svg'
// import closeIcon from '../img/close-icon-white.svg'

const HomeNav = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 30px;
  margin-left: auto;
  padding: 40px 30px;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.darkerGrey};
  padding: 20px 0;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.mono};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const LogoIconWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`

const Icon = styled.img`
  cursor: pointer;
`

const CloseIcon = ({ onClick }) => <Icon onClick={onClick} src={closeIcon} />

const Hamburger = ({ onClick }) => <Icon onClick={onClick} src={toggleIcon} />

const NavList = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0 30px;
  animation: fadeInDown 0.25s ease-out;
  opacity: 1;
  pointer-events: all;
`

const ToggleNavLink = styled(NavLink)`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.white};
`

const Wrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #2c2c2c;
  z-index: 9999;
`

const ToggleNav = ({ open, toggleVisibility }) =>
  open ? (
    <Wrapper>
      <LogoIconWrapper>
        <Link to="/" onClick={toggleVisibility}>
          <Logo inverse alt="Highline BETA" />
        </Link>
        <CloseIcon onClick={toggleVisibility} />
      </LogoIconWrapper>

      <NavList onClick={toggleVisibility}>
        <ToggleNavLink to="/co-creation">Co-Creation</ToggleNavLink>
        <ToggleNavLink to="/accelerators">Corporate Accelerators</ToggleNavLink>
        <ToggleNavLink to="/fund">Fund</ToggleNavLink>
        <ToggleNavLink to="/careers">Careers</ToggleNavLink>
        <ToggleNavLink to="/blog">Blog</ToggleNavLink>
        <ToggleNavLink to="/about">About</ToggleNavLink>
      </NavList>
    </Wrapper>
  ) : (
    <Hamburger onClick={toggleVisibility} />
  )

const Nav = ({ open, toggleVisibility }) => (
  <>
    {/* <Media
      query={{ maxWidth: 767 }}
      defaultMatches={true}
      render={() => (
        <ToggleNav open={open} toggleVisibility={toggleVisibility} />
      )}
    />

    <Media
      query={{ minWidth: 768 }}
      defaultMatches={false}
      render={() => ( */}
        <HomeNav>
          {/* <NavLink to="/services">services</NavLink> */}
          <NavLink to="/training">Training</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
        </HomeNav>
      {/* )} */}
    {/* /> */}
  </>
)

export default Nav
