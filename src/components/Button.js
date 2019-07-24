import React from 'react'
import styled, { css } from 'styled-components'
import Link from './Link'

const buttonStyles = css`
  margin-top: 10px;
  align-self: flex-start;
  text-decoration: none;
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => (props.small ? '0.8rem' : '0.95rem')};

  color: ${props =>
    props.inverse ? props.theme.colors.lighterGrey : props.theme.colors.black};
  border: 2px solid
    ${props =>
      props.inverse
        ? props.theme.colors.lighterGrey
        : props.theme.colors.black};
  border-radius: 8px;
  padding: ${props => (props.small ? '7px 15px' : '10px 20px')};

  &:hover,
  &:focus,
  &:active {
    color: ${props =>
      props.inverse
        ? props.theme.colors.black
        : props.theme.colors.lighterGrey};
    background: ${props =>
      props.inverse
        ? props.theme.colors.lighterGrey
        : props.theme.colors.black};
  }

  &:active {
    position: relative;
    top: 1px;
  }
`

const _Button = styled.button.attrs({
  type: 'button',
})`
  ${buttonStyles};
`

const _Anchor = styled.a.attrs({
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  ${buttonStyles};
`

const Inner = styled(Link)`
  ${buttonStyles};
  text-transform: initial;

  &:hover {
    text-decoration: none;
  }
`

const Button = ({ to, href, children, ...rest }) =>
  to ? (
    <Inner to={to} {...rest}>
      {children}
    </Inner>
  ) : href ? (
    <_Anchor href={href} {...rest}>
      {children}
    </_Anchor>
  ) : (
    <_Button {...rest}>{children}</_Button>
  )

export default Button
