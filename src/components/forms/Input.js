import React from 'react'
import styled, { css } from 'styled-components'

import Label from './Label'

const _Input = styled.input.attrs(props => ({
  type: props.type || 'text',
}))`
  border: 2px solid
    ${props =>
      props.reverse ? props.theme.colors.lightGrey : props.theme.colors.black};
  padding: ${props => (props.small ? '0.5em 0.75em' : '0.75em 1em')};
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props =>
    props.reverse ? props.theme.colors.white : props.theme.colors.black};
  font-size: ${props => (props.small ? '0.8rem' : '1rem')};

  &::placeholder {
    color: ${props =>
      props.reverse ? props.theme.colors.lightGrey : props.theme.colors.black};
    opacity: 0.6;
  }
`

const Input = ({ caption, type, required, reverse, ...props }) => (
  <Label label={caption} inverse={reverse} hidden={type === 'hidden'}>
    <_Input type={type} required={required} reverse={reverse} {...props} />
  </Label>
)

export default Input
