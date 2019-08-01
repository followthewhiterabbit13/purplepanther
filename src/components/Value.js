import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Title = styled.h3`
  font-size: 0.8rem;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.mono};
  color: purple;
  margin: 0 0 10px;
  text-transform: uppercase;
`

const SubTitle = styled.h6`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.black};
  margin: 0 0 10px;

  @media (max-width: 768px) {
  }
`

const Description = styled.p`
  color: ${props => props.theme.colors.darkerGrey};
  line-height: 1.4;
`

const Value = ({ children, title, subTitle }) => (
  <Container>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <Description>{children}</Description>
  </Container>
)

export default Value
