import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/PageWrapper'

const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 40px 0;
  margin-bottom: 0;

  @media (min-width: 768px) {
    padding: 0;
    margin-bottom: 40px;
  }
`

const Wrapper = styled(PageWrapper)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;

  @media (min-width: 768px) {
    grid-row-gap: 40px;
  }
`

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h1`
  margin: 0 0 50px;

  @media (max-width: 768px) {
    margin: 0 0 20px;
  }
`
const Desc = styled.h3`
  color: ${props => props.theme.colors.darkerGrey};
`

const ImageContainer = styled.div`
  img {
    display: block;
    width: 100%;
  }

  @media (min-width: 768px) {
    img {
      transform: translateY(-40px);
    }
  }
`

const HeroBanner = ({ title, children, img = '' }) => (
  <Container>
    <Wrapper>
      <Title>{title}</Title>
      <Inner img={img}>
        <Desc img={img}>{children}</Desc>
        {img && (
          <ImageContainer>
            <img src={img} alt={title} />
          </ImageContainer>
        )}
      </Inner>
    </Wrapper>
  </Container>
)

export default HeroBanner
