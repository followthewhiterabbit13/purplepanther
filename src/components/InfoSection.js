import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;

  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`

const Leadin = styled.div`
  color: ${props => props.theme.colors.brand};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.6rem;
  text-transform: uppercase;
  margin-bottom: 10px;
`

const Title = styled.h4`
  position: relative;
`

const Desc = styled.p`
  margin-bottom: 0;
`

const ImageBox = styled.div`
  width: 50px;
  margin-bottom: 10px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const InfoSection = ({ leadin, title, body, img }) => (
  <Container>
    {img && (
      <ImageBox>
        <img src={img} alt={title} />
      </ImageBox>
    )}
    <Leadin>{leadin}</Leadin>
    <Title>{title}</Title>
    <Desc>{body}</Desc>
  </Container>
)

export default InfoSection
