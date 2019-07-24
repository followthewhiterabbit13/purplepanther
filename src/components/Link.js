import React from 'react'
import { Link as _Link } from '@reach/router'
import styled from 'styled-components'

const InternalLink = styled(_Link)`
  color: ${props =>
    props.white ? props.theme.colors.white : props.theme.colors.primaryBlue};
  font-family: ${props => props.theme.fonts.secondary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export default function Link({ href, to, ...props }) {
  if (href && !to)
    return (
      <InternalLink
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...props}
      />
    )
  return <InternalLink to={to} {...props} />
}
