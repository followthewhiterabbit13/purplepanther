import React from 'react'
import styled from 'styled-components'

const Container = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  ${props =>
    props.hidden &&
    `
    display: none;
    margin: 0;
    padding: 0;
  `}
`

const _Label = styled.span`
  text-transform: uppercase;
  color: ${props =>
    props.inverse ? props.theme.colors.lightGrey : props.theme.colors.black};
  font-size: 0.625em;
  letter-spacing: 1px;
  padding: 0 0 5px 0;
`

const Label = ({ label, hidden, inverse, children }) => (
  <Container hidden={hidden}>
    {label && <_Label inverse={inverse}>{label}</_Label>}
    {children}
  </Container>
)

export default Label
