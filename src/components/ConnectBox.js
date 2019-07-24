import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const ConnectBoxContainer = styled.div`
  background: ${props => props.theme.colors.primaryYellow};
  padding: 40px 20px;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  border-radius: 20px;
  @media (min-width: 768px) {
    padding: 40px;
    
    max-width: 580px;
    // z-index: 10;
  }
`

const Text = styled.div`
  margin-bottom: 20px;
`

const Heading = styled.h3`
  font-weight: bold;
  margin-bottom: 20px;
  align-self: center;
`

const ConnectButton = styled(Button)`
  align-content: left;
`

const ConnectBox = ({ title, button, children, link }) => (
  <ConnectBoxContainer>
    <Heading>{title}</Heading>
    <Text>{children}</Text>
    {/* <ConnectButton href={link}>{button}</ConnectButton> */}
  </ConnectBoxContainer>
)

export default ConnectBox
