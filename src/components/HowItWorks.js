import React from 'react'
import styled from 'styled-components'

import Value from './Value'

const Wrapper = styled.div`
  position: relative;
  margin: 40px 0;
  padding-left: 20px;

  &:before {
    z-index: 10;
    content: ' ';
    position: absolute;
    left: -1px;
    background: black;
    height: 72%;
    width: 1px;
    top: 2px;
  }

  & > div {
    margin-bottom: 40px;

    &:before {
      z-index: 20;
      content: ' ';
      width: 8px;
      height: 8px;
      background: #fff;
      position: absolute;
      transform: translateY(2px);
      left: -5px;
      border-radius: 9999px;
      border: 1px solid black;
    }

    &:last-child {
      

      &:after {
        z-index: 20;
        content: ' ';
        background: #fff;
        position: absolute;
      
        transform: translateY(2px);
      
        height: 8px;
        border-radius: 9999px;
      }
    }
  }

  @media (min-width: 768px) {
    margin: 80px 0 80px 20px;
    width: 60%;
  }
`

const Title = styled.h3`
  margin: 0 0 10px;
`

const HowItWorks = ({ items }) => (
  <>
    <Title>We believe in:</Title>
    <Wrapper>
      {items.map(i => (
        <Value key={i.title} title={i.title} subTitle={i.subTitle}>
          {i.body}
        </Value>
      ))}
    </Wrapper>
  </>
)

export default HowItWorks
