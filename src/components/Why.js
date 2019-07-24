import React from 'react'
import styled from 'styled-components'

import Shape from './Shape'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  margin: 40px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 2fr);
    > :nth-child(2) {
      margin-top: 80px;
    }

    > :nth-child(3) {
      margin-top: 160px;
    }
  }
`

const ShapeContainer = styled.div`
  display: grid;
  grid-template-rows: 23px auto;
  grid-gap: 20px;
`

const Leadin = styled.span`
  font-weight: bold;

  &::after {
    content: ' ';
  }
`
const Body = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.darkerGrey};
`

const ShapeBox = ({ shape: { type, color }, title, children }) => (
  <ShapeContainer>
    <Shape type={type} color={color} />
    <Body>
      <Leadin>{title}</Leadin>
      {children}
    </Body>
  </ShapeContainer>
)

const Title = styled.h2`
  margin: 0 0 10px;
`

const Why = ({ title, items, ...props }) => (
  <>
    <Title>{title}</Title>
    <Wrapper>
      {items.map(i => (
        <ShapeBox
          key={i.title}
          title={i.title}
          subTitle={i.body}
          shape={i.shape}>
          {i.body}
        </ShapeBox>
      ))}
    </Wrapper>
  </>
)

export default Why
