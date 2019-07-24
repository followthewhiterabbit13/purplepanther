import React from 'react'
import styled from 'styled-components'

const Accent = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 0.6rem;
  color: ${props => props.theme.colors.brand};
`

export default Accent
